export function useModal() {
  const getDialog = (id: string) => document.querySelector(`#${id}`) as HTMLDialogElement
  const openModal = (id: string) => getDialog(id).showModal()
  const closeModal = (id: string) => getDialog(id).close()
  return {
    getDialog,
    openModal,
    closeModal
  }
}