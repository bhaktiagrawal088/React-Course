import React from 'react'

function Cards({name, btntext="Default value"}) {
    console.log(name)

    return (
    <div className="w-[300px] rounded-md border">
    <img
      src="https://images.pexels.com/photos/5614135/pexels-photo-5614135.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Laptop"
      class="h-[200px] w-full rounded-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >{btntext}
      </button>
    </div>
  </div>
  )
}

export default Cards
