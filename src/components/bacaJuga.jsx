function bacaJuga() {
  const articles = [
    {
      image: "../../public/nadia.jpeg",
      title: "Siapa Kami ? - Nadya Riapratama",
      author: "NADYA RIA PRATAMA",
      date: "9 Jun 2021",
    },
    {
      image: "../../public/nadia.jpeg",
      title: "Siapa Kami ? - Maria Joanita",
      author: "MARIA JOANITA GOODALI",
      date: "31 Mar 2021",
    },
    {
      image: "../../public/nadia.jpeg",
      title: "Menikmati Pesona Barcelona Mengunjungi Permata Spanyol",
      author: "",
      date: "24 Jul 2023",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mb-6 mt-40">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Baca juga</h2>
        <button className="text-red-500 hover:text-red-600 font-semibold rounded-full border pl-5 pr-5 py-2 border-red-500">LIHAT SEMUA ARTIKEL »</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">GET GOING</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              {article.author && <p className="text-gray-600 text-sm mb-2">{article.author}</p>}
              <p className="text-gray-400 text-xs mb-4">{article.date}</p>
              <button className="text-red-500 hover:text-red-600 text-sm font-semibold">LANJUTKAN MEMBACA →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default bacaJuga;
