
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [carrera, setCarrera] = useState("");

  const { AddUser } = useContext(GlobalContext);
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
          className="bg-black rounded-3xl w-12 h-12 absolute bottom-7 right-7 text-white text-[30px] flex items-center justify-center"
        >
          +
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
                    Registrar Estudiantes
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        let uuid = self.crypto.randomUUID();
                        AddUser({
                          id: uuid,
                          name,
                          carrera,
                          status: true,
                        });
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
                          onChange={(e) => setCarrera(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 mt-3 py-2 bg-black w-full rounded text-white"
                        onClick={closeModal}
                      >
                        Registrar
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