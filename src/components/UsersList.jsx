import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";
import MyModal from "../components/Modal";
import Modal from "../components/ModalEdit";

export default function Title() {
  const { users, UpdateStatus, DeleteUser } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");


  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.carrera.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalEstudiantes = users.length;
  const totalEstudiantesActivos = filteredUsers.filter(
    (user) => user.status === true
  ).length;

  // Actualizar el término de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <p className="text-center text-[32px] font-bold text-black mt-20">
        Hay {totalEstudiantesActivos} Estudiantes activos de {totalEstudiantes} Estudiantes registrados
      </p>
      <div className="mt-3 text-center rounded-[22px] w-[250px] h-[50px] p-3 bg-gray-200 text-gray-800 flex justify-content-center mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <input
            type="text"
            placeholder="Buscar estudiante"
            className="pl-2 bg-gray-200"
            value={searchTerm}
            onChange={handleSearch}
        />
      </div>
      {filteredUsers.length > 0 ? (
        <table className="table-bordered table-striped border w-100 mt-3">
          <thead className="bg-black text-white text-center text-[22px]">
            <tr>
              <td>Nombre</td>
              <td>Carrera</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center">
                <td>{user.name}</td>
                <td>{user.carrera}</td>
                <td className="flex justify-content-center">
                    <button
                        className="px-2 py-2 rounded mr-2"
                        onClick={() => UpdateStatus(user.id)}
                    >
                        {user.status ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-toggle-on" viewBox="0 0 16 16">
                        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-toggle-off" viewBox="0 0 16 16">
                        <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
                    </svg>}
                    </button>
                    {/* <button
                        className="px-2 py-2 rounded mr-1"
                        onClick={() => UpdateUser(user.id)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </button> */}
                  <Modal user={user}/>
                    <button
                    className="px-2 py-2 rounded mr-1"
                    onClick={() => DeleteUser(user.id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">No hay registro</p>
      )}
      <MyModal />
    </div>
  );
}