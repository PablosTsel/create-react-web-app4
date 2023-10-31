import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
        ...modules,
    ]);
  };
  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }




  return (

    <ul className="list-group" style={{borderRadius: 0, backgroundColor: "red"}}>
      <li className="list-group-item float-end">
        <input style={{height: 38 }} value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <button className = "btn btn-success" type="button" style= {{marginLeft: 10}} onClick={() => { addModule(module) }}>
          Add</button>
        <button className = "btn btn-warning" type="button" style= {{marginLeft: 5}} onClick={updateModule}>
                Update
        </button>
        <br/>


        <textarea style={{width: 336, height: 80, marginTop: 6}} value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
      </li>

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
                        <button className = "btn btn-success float-end" type="button"
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

                        <button className = "btn btn-danger float-end" type="button"
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;
