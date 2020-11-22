import React, { useEffect, useState } from "react";
import firebase from "../../../utils/Firebase";
import "firebase/storage";
import "firebase/firestore";
import "./EditarPC.scss";
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
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
import DialogEditarPC from "../../../components/SistemaPC/ComponentsEditar/DialogEditarPC";
import Switch from '@material-ui/core/Switch';

const db = firebase.firestore(firebase);

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function EditarPC() {
  const classes = useStyles();
  const [linkDataFormPC, setLinkDataFormPC] = useState([]);
  /* const [search, setSearch] = useState(""); */
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  moment.locale();
  /* Para obtener sistemaPC */
  const getSistemaPc = async () => {
    await db.collection("sistemapc").onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach(doc => {
        /* console.log(doc.data()); */
        docs.push({ ...doc.data(), idKey: doc.id })
      });
      setLinkDataFormPC(docs);
    });
  }

  function searchTerm(term) {
    return function (x) {
      return (x.registrador.includes(term)) || (x.marca.toLowerCase().includes(term.toLowerCase())) || (x.noSerie.includes(term)) || !term;
    }
  };

  useEffect(() => {

    getSistemaPc();
  }, [])


  const handlerOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleChange = (value, id) => {
    console.log(value, id);
    db.collection("sistemapc")
      .doc(id)
      .update({
        estadoVigente: !value,
      })
  }

  return (
    <div>
      <h1 className="text-center my-4">Editar Dispositvos.</h1>

      <div className="container">
        <div className="search-box-editar w-100">
          <input type="text" className="w-100" placeholder="Introduzca algún dato del equipo." onChange={(e) => { setTerm(e.target.value) }} name="term" />
          {/* <i id="icon" class="search"></i> */}
        </div>
      </div>

      <div className="container contenedor-ver-pc">
        <div className="row">
          {linkDataFormPC
            .filter(searchTerm(term))
            .map(link => (
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
                  <CardActions disableSpacing className="card-action-pc">
                    <IconButton aria-label="Editar equipos" onClick={() => {
                      handlerOpen(link.idKey);
                    }}>
                      <CreateIcon className="item-actualizar-pc" />
                    </IconButton>
                    <Switch
                      checked={link.estadoVigente}
                      onChange={() => { handleChange(link.estadoVigente, link.idKey) }}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>


      <DialogEditarPC id={id} setId={setId} open={open} setOpen={setOpen} />
    </div>
  );
}
function Image(props) {
  /* const classes = useStyles(); */
  const { link } = props;
  const [bannerUrl, setBannerUrl] = useState(null);

  useEffect(() => {
    firebase.storage()
      .ref(`sistemapc/${link.image}`)
      .getDownloadURL()
      .then((image) => { setBannerUrl(image) });
  }, [link])


  return (

    <CardMedia
      component="div"
      className="card-top-editar-pc"
      image={bannerUrl}
      title={link.image}
    />

  );
}