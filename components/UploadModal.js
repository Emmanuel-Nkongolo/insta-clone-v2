import { modalState } from "@/atom/modalAtom"
import { useRecoilState } from "recoil"
import Modal from "react-modal"
import { AiOutlineCamera } from "react-icons/ai"
import { useRef, useState } from "react"

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const [selectedFile, setSelectedFile] = useState(null)
  const addImageToPost = (event) => {
    const reader = new FileReader()
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }
  const filePickerRef = useRef(null)
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false)
            setSelectedFile(null)
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                className="w-full max-h-[250px] object-cover cursor-pointer"
                src={selectedFile}
                alt=""
              />
            ) : (
              <AiOutlineCamera
                onClick={() => filePickerRef.current.click()}
                className="h-14 w-14 cursor-pointer bg-red-200 p-2 rounded-full border-2 text-red-500"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength="150"
              placeholder="Enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              disabled
              className="p-2 border w-full bg-red-600 text-white shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Your Image
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
