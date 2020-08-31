/* Clase auth, el componente principal donde se alberga la los componentes hijos Register y Login
    
*/

import React,{useState} from "react";
import AuthForm from "../../components/AuthForm";
import 'firebase/auth';
import firebase from '../../utils/Firebase';
export default function Auth() {
  

  return (
    <>
      <AuthForm/>
    </>
  );
}


