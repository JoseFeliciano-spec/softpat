import React, {useEffect, useState} from "react";
import firebase from "../../../utils/Firebase";
import "firebase/storage";
import "firebase/firestore";
import "./VerPC.scss";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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

  useEffect(() => {
    getSistemaPc();
  }, [])

  return (
    <div>
      <h1 className="text-center mt-4">Ver Pc</h1>
      <div className="container contenedor-ver-pc">
        <div className="row">
          {linkDataFormPC.map(link =>(
            <div className="col-md-4 col-12">
              <Card className="w-100 mt-4">
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  /* image="/static/images/cards/paella.jpg" */
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
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
                </CardActions>
              </Card>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
}
function dataRegistoPC() {
  return {
    tipoComputadora: "",
    nombreEquipo: "",
    memoriaRam: "",
    resolucionPantalla: "",
    discoDuro: "",
    marcaProcesador: "",
    fechaEquipo: new Date(),
    marca: "",
    marcaGrafica:"",
    estado: "",
    modelo: "",
    noSerie: "",
    owned: "",
    lectordvd:"",
    puertohdmi:"",
    puertousb:""
  };
}