import React, {useEffect, useState} from "react";
import firebase from "../../../utils/Firebase";
import "firebase/storage";
import "firebase/firestore";
import "./VerPC.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work

const db = firebase.firestore(firebase);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VerPC() {
  const classes = useStyles();
  const [linkDataFormPC, setLinkDataFormPC] = useState([]);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  moment.locale();
  /* Para obtener sistemaPC */
  const getSistemaPc = async()=>{
    const querySnapshot =  await db.collection("sistemapc").onSnapshot(       (querySnapshot)=>{
      const docs = []
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        docs.push({...doc.data(), idKey: doc.id})
      });
      setLinkDataFormPC(docs);
    });
  }

  function searchTerm(term){
    return function(x){
      return (x.marca.toLowerCase().includes(term.toLowerCase())) ||(x.noSerie.includes(term)) || !term;
    }
  };

  useEffect(() => {
    
    getSistemaPc();
  }, [])

  
  return (
    <div>
      <h1 className="text-center my-4">Dispositivos en manteniento.</h1>

      <div className="container">
        <div className="search-box w-100">
          <input type="text" className="w-100" placeholder="Introduzca el número de serie y/o la marca del dispositivo." onChange={(e)=>{setTerm(e.target.value)}} name="term"/>
          {/* <i id="icon" class="search"></i> */}
        </div>
      </div>

      <div className="container contenedor-ver-pc">
        <div className="row">
          {linkDataFormPC
            .filter(searchTerm(term))
            .filter(link => link.estadoVigente === true)
            .map(link =>(
            <div className="col-md-4 col-12" key={link.idKey}>
              <Card className="w-100 mt-4 card-contenedor">
                <CardHeader
                  className="card-header-pc"
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {link.registrador.charAt(0)}
                    </Avatar>
                  }
                  /* action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  } */
                  title={`${link.nombreEquipo} by ${link.registrador}`}
                  subheader={moment(link.fechaEquipo.toDate()).calendar()}
                />
                
                  <Image link={link} />
                
                <CardContent className="card-content-pc">
                  <Typography variant="body2" color="textSecondary" component="p" className="mb-1"> 
                    {`Dueño del equipo: ${link.owned}`} 
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary" component="p" className="mb-1">  
                    {`Marca del equipo: ${link.marca}`} 
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary" component="p" className="mb-1"> 
                    {`Observaciones: ${link.observaciones}`}
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing className="card-action-pc">
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions> */}
              </Card>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
}
function Image(props) {
  const classes = useStyles();
  const {link} = props;
  const [bannerUrl, setBannerUrl] = useState(null);

  useEffect(() => {
    firebase.storage()
            .ref(`sistemapc/${link.image}`)
            .getDownloadURL()
            .then((image) =>{setBannerUrl(image)});
  }, [link])


  return(
    
      <CardMedia
        component="div"
        className={classes.media}
        image={bannerUrl}
        title={link.image}
      />
    
  );
}