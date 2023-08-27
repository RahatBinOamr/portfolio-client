import cogoToast from 'cogo-toast';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePortfolio = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [live, setLive] = useState('');
  const [server, setServer] = useState('');
  const [client, setClient] = useState('');

  const [category, setCategory] = useState('');

  const handelPost = e => {
    e.preventDefault();
    const portfolio = {
      description,
      title,
      image,
      image1,
      image2,
      image3,
      image4,
      category,
      live,
      server,
      client,
    };
    console.log(portfolio);
    fetch(`https://protfolio-server-ten.vercel.app/api/v1/portfolio`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(portfolio),
    })
      .then(res => res.json())
      .then(data => {
        console.log('hello', data);
        if (data?.status === 'success') {
          cogoToast.success(data.message);
          reset();
        }
      })
      .catch(err => console.error(err));
  };
  const reset = () => {
    setDescription('');
    setImage('');
    setImage1('');
    setImage2('');
    setImage3('');
    setImage4('');
    setLive('');
    setServer('');
    setClient('');
    setTitle('');
    setCategory('');
  };
  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-20 ">
        <div className="font-serif items-center text-center mt-8 mb-5">
          <h1 className="text-3xl font-bold  text-black">Create new post</h1>
        </div>
        <div>
          <form
            onSubmit={handelPost}
            className=" bg-gray-100 text-black font-semibold rounded-lg px-12 py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="portfolio title"
                type="text"
                placeholder=" portfolio title"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                name="portfolioCategory"
                type="text"
                placeholder=" portfolio Category"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />

              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio image url"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio image url-1"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image1}
                onChange={e => setImage1(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio image url-2"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image2}
                onChange={e => setImage2(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio image url-3"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image3}
                onChange={e => setImage3(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio image url-4"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={image4}
                onChange={e => setImage4(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio live link url"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={live}
                onChange={e => setLive(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio server link url"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={server}
                onChange={e => setServer(e.target.value)}
              />
              <input
                name="portfolio image url"
                type="text"
                placeholder="portfolio client link url"
                className="input input-ghost w-full p-2 bg-white shadow-xl input-bordered"
                value={client}
                onChange={e => setClient(e.target.value)}
              />
            </div>

            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              className="mt-4"
            />
            <button className=" bg-green-500 mt-5  text-white font-bold rounded-lg shadow-2xl p-3">
              Submit Your Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePortfolio;
