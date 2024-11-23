import Image from "next/image";

export default function Productcard() {
  return (
    <main>
      {/* Header */}
      <h1 className="text-center text-black pt-4 font-bold text-4xl bg-slate-300 shadow-lg sm:text-2xl">
        APPLE OUTLET
      </h1>

      {/* Product Cards Container */}
      <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Card 1 */}
        <div className="border bg-gray-200 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center p-6">
            <Image src="/image4.png" alt="iPhone 15 Pro Max" width={200} height={200} />
          </div>
          <p className="text-center text-2xl font-semibold py-2">iPhone 15 Pro Max</p>
          <p className="text-center text-xl font-medium py-2 text-gray-700">$847.75/=</p>
          <div className="flex justify-center py-4">
            <button className="bg-gray-300 py-2 px-6 rounded-lg text-xl font-bold hover:bg-yellow-500 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="border bg-gray-200 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center p-6">
            <Image src="/image1.png" alt="iPhone 15 Pro Max" width={200} height={200} />
          </div>
          <p className="text-center text-2xl font-semibold py-2">iPhone 15 Pro Max</p>
          <p className="text-center text-xl font-medium py-2 text-gray-700">$864.94/=</p>
          <div className="flex justify-center py-4">
            <button className="bg-gray-300 py-2 px-6 rounded-lg text-xl font-bold hover:bg-yellow-500 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="border bg-gray-200 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center p-6">
            <Image src="/image2.png" alt="iPhone 16" width={200} height={200} />
          </div>
          <p className="text-center text-2xl font-semibold py-2">iPhone 16</p>
          <p className="text-center text-xl font-medium py-2 text-gray-700">$1,199.00/=</p>
          <div className="flex justify-center py-4">
            <button className="bg-gray-300 py-2 px-6 rounded-lg text-xl font-bold hover:bg-yellow-500 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}