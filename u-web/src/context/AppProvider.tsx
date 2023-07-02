import { createContext, useEffect, useState } from "react";
import { getMateriaEstudiante, getMaterias, getPersonas } from "../services/uWebService";

export const AppContext = createContext({});

interface Props{
  children:JSX.Element
}

export const AppProvider = ({children}:Props) => {
  
  const [auth,setAuth] = useState(false);
  const [authEstudiante,setAuthEstudiante] = useState(false);
  const [codigo_usuario,setCodigo_usuario] = useState('');

  const [dbPersonas,setDbPersonas] = useState([]);
  const [dbMaterias,setDbMaterias] = useState([]);
  const [dbMateriaEstudiante,setDbMateriaEstudiante] = useState([]);
  
  const getDataBase = async () => {
    const datosMaterias = await getMaterias();
    const datosPersonas = await getPersonas();
    const datosMateriaEstudiante = await getMateriaEstudiante();

    setDbMaterias(datosMaterias.data);
    setDbPersonas(datosPersonas.data);
    setDbMateriaEstudiante(datosMateriaEstudiante.data);
  }

  useEffect(() => {
    if(dbMateriaEstudiante.length===0 || dbMaterias.length===0 ||
      dbPersonas.length===0){
        getDataBase();
    }
  },[auth,authEstudiante]);

  const [idPath,setIdPath] = useState("");

  const [valuesAsignarDoc,setValuesAsignarDoc] = useState({
    materia:'',
    docente:''
  });

  const [valuesAsignarEst,setValuesAsignarEst] = useState({
    codigo:'',
    materia:''
  });

  const [valuesAgregarMat,setValuesAgregarMat] = useState({
    materia:'',
    creditos:''
  });

  const [valuesAgregarEst,setValuesAgregarEst] = useState({
    nombre:'',
    codigo:'',
    password:''
  });

  const [materias,setMaterias] = useState([
    {text:"materia 1",value:undefined},
    {text:"materia 2",value:undefined},
    {text:"materia 3",value:undefined}
  ]);

  const ASIGNAR_ESTUDIANTE_ORDERS = [
    {
      placeholder:'codigo estudiante',
      stateValue:valuesAsignarEst.codigo,
      setStateValue:(newValue:string) => setValuesAsignarEst({...valuesAsignarEst,codigo:newValue}),
      arrayOptions:[]
    },
    {
      placeholder:'materia',
      stateValue:valuesAsignarEst.materia,
      setStateValue:(newValue:string) => setValuesAsignarEst({...valuesAsignarEst,materia:newValue}),
      arrayOptions:materias
    }
  ];

  const AGREGAR_MATERIA_ORDERS = [
    {
      placeholder:'materia',
      stateValue:valuesAgregarMat.materia,
      setStateValue:(newValue:string) => setValuesAgregarMat({...valuesAgregarMat,materia:newValue})
    },
    {
      placeholder:'creditos',
      stateValue:valuesAgregarMat.creditos,
      setStateValue:(newValue:string) => setValuesAgregarMat({...valuesAgregarMat,creditos:newValue})
    }
  ];

  const AGREGAR_ESTUDIANTE_ORDERS = [
    {
      placeholder:'nombre',
      stateValue:valuesAgregarEst.nombre,
      setStateValue:(newValue:string)=>setValuesAgregarEst({...valuesAgregarEst,nombre:newValue})
    },
    {
      placeholder:'codigo docente',
      stateValue:valuesAgregarEst.codigo,
      setStateValue:(newValue:string)=>setValuesAgregarEst({...valuesAgregarEst,codigo:newValue})
    },
    {
      placeholder:'password',
      stateValue:valuesAgregarEst.password,
      setStateValue:(newValue:string)=>setValuesAgregarEst({...valuesAgregarEst,password:newValue})
    }
  ];

  useEffect(() => {
    
  },[auth]);

  const ROUTES_ADMINISTRATOR = 
  [
    {text:'Asignar materia a estudiante',path:'/asignar-estudiante',pathFather:'/administrador'},
    {text:'Agregar Materia',path:'/agregar-materia',pathFather:'/administrador'},
    {text:'Agregar Estudiante',path:'/agregar-estudiante',pathFather:'/administrador'},
    {text:'Salir',path:'/auth/login',pathFather:''}
  ];
  
  return (
    <AppContext.Provider
    value={{
      auth,
      setAuth,
      ROUTES_ADMINISTRATOR,
      idPath,
      setIdPath,
      ASIGNAR_ESTUDIANTE_ORDERS,
      AGREGAR_MATERIA_ORDERS,
      AGREGAR_ESTUDIANTE_ORDERS,
      authEstudiante,
      setAuthEstudiante,
      codigo_usuario,
      setCodigo_usuario,
      dbMateriaEstudiante,
      dbMaterias,
      dbPersonas,
      valuesAsignarDoc,
      setValuesAsignarDoc,
      valuesAsignarEst,
      setValuesAsignarEst,
      valuesAgregarMat,
      setValuesAgregarMat,
      valuesAgregarEst,
      setValuesAgregarEst,
      materias,
      setMaterias
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
