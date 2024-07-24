const Buttons = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-3 px-7 py-4 border font-montserrat text-md leading-none bg-black text-white rounded-md border-black">
        {label}

        <img src={iconURL}
        alt="arrow right icon" 
        className="m1-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Buttons