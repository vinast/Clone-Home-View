const PrivateTrip = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xl md:text-4xl font-bold mb-2 font-sans-Robotto">
          "Better to <span className="text-red-500">SEE</span> something once than hear about it <span className="text-blue-500">A THOUSAND TIMES</span>"
        </p>
        <p className="text-xl md:text-2xl font-bold mb-2 ">- Asian Proverb.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="bg-white p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-red-500 mb-2">PRIVATE TRIP</h2>
            <h3 className="text-5xl font-bold mb-6">
              Berangkat <span className="text-red-500">Kapan Saja</span> <br /> Semaumu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {["Tentukan tanggal keberangkatan sesukamu", "Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 mr-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {["Tidak ada kuota minimum, jadi pasti berangkat", "Liburan jadi lebih exclusive untuk kamu dan keluarga"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 mr-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0 bg-gradient-to-r from-red-600 to-yellow-500 p-6 rounded-lg">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg text-white p-6 rounded-lg">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h4 className="font-bold mb-2">Konsultasi GRATIS</h4>
            <p>Curhatain aja semuanya!</p>
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-lg text-white p-6 rounded-lg">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h4 className="font-bold mb-2">Local Guide</h4>
            <p>Biar ada temen!</p>
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-lg text-white p-6 rounded-lg">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <h4 className="font-bold mb-2">Transportasi</h4>
            <p>Bebas pilih transportasi apa</p>
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-lg text-white p-6 rounded-lg">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h4 className="font-bold mb-2">Lengkap Paketnya</h4>
            <p>Hotel, Asuransi, Visa, dan all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTrip;
