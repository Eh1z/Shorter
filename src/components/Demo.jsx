import React, { useState, useEffect} from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {

  const [article, setArticle] = useState({
    url:'',
    summary:'',
  });

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
  
    if (articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);
  

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //alert('Link Submitted');
    const {data} = await getSummary({ articleUrl: article.url});

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles= [newArticle, ...allArticles]

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      //console.log(newArticle);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }

  }

  const handleCopy = (copyLink) => {
    setCopied(copyLink);
    navigator.clipboard.writeText(copyLink);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*Search Bar*/}
      <div className='w-full flex flex-col gap-3'>
        <form onSubmit={handleSubmit}
        className='flex items-center justify-center relative'
        >
          <img src={linkIcon} alt="Link_Icon"
          className='left-0 my-2 ml-3 w-5 absolute'/>
          <input type="url" placeholder='Enter URL of Article' 
          value={article.url}
          className='url_input peer'
          onChange={(e) => setArticle({
            ...article, url: e.target.value
          })}
          required
          />
          <button type='submit' className='submit_btn peer-focus: border-purple-700 peer-focus:text-purple-700'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEtjZKAxYKSx+QyjFhAMYYqDqE7p3H+QLU33jLCaNWoBw9AIojrFcwua7hslYEsyFPmgXuG8wH+m//sZGBgMcKUSsi2oVzhvADVcAF8yJMuCWuXzCYz//88nmIuQFJCUD0i2gJHhYNNdIwdsDsKZ0aBBdICBgYEfXxAR8iXenAyNZJAl+riCgCILYJrxJVOqWEDIEHzyFBd2hCwftYBQCNG+0gcAH1xNGUS+9NYAAAAASUVORK5CYII="/>
          </button>

        </form>

        {/*Article Search History */}
        <div className='flex flex-col gap-2 max-h-60 overflow-y-auto'>
            {allArticles.map((item, index) => (
             <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
             >
              <div className='copy_btn' 
              onClick={() => handleCopy(item.url)}>
                <img src={copied === item.url ? tick : copy} alt="copy_button"
                className='w-[40%] h-[40%] object-contain' />
              </div>
              <p className='flex-1 font-satoshi blue_gradient font-medium text-sm truncate'>
                {item.url}
              </p>
             </div>
            ))}
          </div>
      </div>

              {/*Summarized Results*/}
              <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching? (
                  <img src={loader} alt='loading_animation'
                  className='h-20 w-20 object-contain'/>
                ): error ? (
                  <p 
                  className='font-inter font-bold text-black text-center'
                  >
                    Oof, that wasn't supposed to happen... <br/>
                    <span
                    className='font-satoshi font-nomal text-purple-700'>
                      {error?.data?.error}
                    </span>
                  </p>
                ): (
                  article.summary && (
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <h1 className='font-satoshi font-bold purple_gradient text-2xl'>Summarized 
                        <span> Article</span>
                      </h1>

                      <div className='summary_box w-full'>
                        <p className='font-inter text-sm font-medium text-gray-700'>
                          {article.summary}
                        </p>
                      </div>
                    </div>
                  )
                )
                }
              </div>

    </section>
  )
}

export default Demo