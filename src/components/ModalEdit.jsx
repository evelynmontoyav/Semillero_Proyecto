
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Modal({user}) {
  let [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(user.name);
  const [carrera, setCarrera] = useState(user.carrera);

  const { UpdateUser } = useContext(GlobalContext);

  function closeModal() {
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true);
  }
  

  return (
    <>
      <div className="inset-0 flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="px-2 py-2 rounded mr-1"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[25px] text-center leading-6 text-black"
                  >
                    Editar estudiante
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          UpdateUser(user.id, name, carrera);
                            closeModal();
                        }}
  
                    >
                      <div className="flex flex-col gap-2 mt-3">
                        <input
                          required
                          placeholder="Nombre Completo"
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2 mt-3">
                        <input
                          required
                          placeholder="Carrera"
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          value={carrera}
                          onChange={(e) => setCarrera(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 mt-3 py-2 bg-black w-full rounded text-white"
                        onClick={closeModal}
                      >
                        Actualizar
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}