import React, { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {

const [movies ,setMovies] = useState([
      {
        id:1,
        title: 'kill me love me',
        description: '"Kill Me Love Me" (Chinese: 春花焰 / Chun Hua Yan) is a 2024 Chinese historical romance and revenge drama starring Liu Xueyi and Wu Jinyan. Set against the backdrop of warring kingdoms, the series delves into themes of betrayal, identity, and the complexities of love born from vengeance. Ten years ago, Prince Murong Jinghe of the Dayan Kingdom led the formidable Weibei Army to reclaim Qingzhou from enemy forces. However, upon his triumphant return, Qingzhou was engulfed in flames, resulting in the massacre of its civilians. Branded the "Butcher General," Murong Jinghe was blamed for the tragedy, leading to his exile and physical disability. Among the survivors was Mei Lin, a young woman who lost her family in the inferno. Driven by a thirst for revenge, she joins the clandestine organization known as the Dark Workshop, undergoing rigorous training to become an assassin. Her first mission: assassinate Murong Jinghe.Disguised as a bride in a political alliance, Mei Lin infiltrates the royal court, awaiting the perfect moment to strike. Unbeknownst to her, the very man she seeks to kill is the mastermind behind the Dark Workshop, orchestrating events from the shadows. As their paths intertwine, Mei Lin grapples with her mission and burgeoning feelings, while Murong Jinghe confronts the consequences of his past and the true architect of the Qingzhou massacre. Their entangled fates challenge notions of justice, loyalty, and love.',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMjUzZGEyYWEtZDc0Mi00ZTNmLTkyNDctZDhjMjRlNjlmMTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 
        rating: 6,
        trailer: 'https://www.youtube.com/embed/SXnYl2tU6AY?si=N_agLJyxAz7WZx10'
    },{
      id:2,
      title: 'who rules the world',
      description: '"Who Rules the World" is a wuxia romance drama that follows the epic journey of two skilled martial artists — Hei Fengxi, a refined and intelligent prince, and Bai Fengxi, a fierce and independent princess — as they navigate a chaotic world of political unrest, rival kingdoms, and martial arts sects.Disguised under aliases, they fight side by side across the martial arts world, concealing their true identities while growing closer through battles, betrayals, and shared ideals. As war brews and power struggles escalate, they must choose between love and responsibility while striving to bring peace and justice to the realm.',
      posterURL: 'https://i.pinimg.com/736x/3c/3c/7a/3c3c7a59ef2e8e77d8a63499283722e5.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/KqXabRfHvOI?si=x0uJSENxFO-M9QE-'
    },{
      id:3,
      title: 'The Princess Weiyoung',
      description: '"The Princess Weiyoung" tells the story of Li Weiyoung, a princess of the Northern Liang kingdom who survives a brutal betrayal that destroys her family. Assuming a new identity, she enters the enemys royal court to seek revenge. Amid court intrigue, political schemes, and hidden enemies, she uses her wit and courage to uncover secrets, reclaim justice, and find unexpected love — all while navigating a treacherous path filled with danger and deception.',
      posterURL: 'https://xingsings.wordpress.com/wp-content/uploads/2016/12/20160328115455748.jpg', 
      rating: 9,
      trailer: 'https://www.youtube.com/embed/w1VQCbAglvQ?si=3j067GRkK-8lCCqL'
    },{
      id:4,
      title: 'the story of the pearl girl',
      description: '"The Story of the Pearl Girl" follows the journey of a resilient young woman who escapes the brutal conditions of a pearl harvesting farm where she was exploited for her unique ability to identify rare and high-quality pearls. Fleeing a life of oppression, she reinvents herself in the glittering but cutthroat world of jewelry design.Armed with an extraordinary eye for beauty and a mysterious past, she begins working for a prestigious jewelry company. There, she must prove her talent while facing fierce competition, office politics, and those who would rather see her fail. Along the way, she forms unexpected friendships and navigates complex relationships, including a slow-burning romance with a cold yet brilliant designer who hides emotional wounds of his own.As her designs begin to captivate the fashion world, secrets from her past resurface—threatening not only her rising career but also the new life she’s worked so hard to build. The drama weaves together themes of survival, ambition, love, and justice, portraying a heroine who dares to dream despite her scars.',
      posterURL: 'https://i.pinimg.com/736x/13/56/4d/13564d9041ec8e8d16056019a111ca9d.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/JfUDfYR-3KM?si=iGVfD21FeNz7Vue9'
    },{
      id:5,
      title: 'when i fly towards you',
      description: '"When I Fly Towards You" is a heartwarming youth romance drama that centers on Su Zaizai, a lively and cheerful high school student who has just transferred to a new school. On a rainy day, she has a chance encounter with Zhang Lurang, a quiet and academically gifted classmate who keeps to himself and carries emotional burdens from his past. Despite his cold demeanor, Su Zaizai is immediately drawn to him and, with her outgoing and sincere personality, begins to break through his emotional walls. As the story unfolds, their bond deepens through shared school experiences, study sessions, and heartfelt conversations. Su Zaizai’s warmth and positivity challenge Zhang Lurang’s insecurities and help him gain the courage to believe in himself and open up to others. Meanwhile, Su Zaizai grows more emotionally mature as she discovers what it truly means to care for someone and pursue a dream.The drama explores themes of self-discovery, first love, and the emotional highs and lows of youth. Along with a close-knit group of friends, Su Zaizai and Zhang Lurang experience the joy of growing up, making mistakes, and becoming better versions of themselves—all while falling deeply in love.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZThhMzJiZDQtMGE3Yi00NDc1LWFhZDgtOWUwYTAyNDJlNTNlXkEyXkFqcGc@._V1_.jpg', 
      rating: 8,
      trailer: 'https://www.youtube.com/embed/gtXj5fhacUw?si=u4MT5eSoKAxDEZW-'
    },{
      id:6,
      title: 'love 020',
      description: '"Love 020" follows Bei Weiwei, a beautiful and intelligent computer science major, and Xiao Nai, a top student who is also the campus heartthrob and a skilled game developer. The story begins in a popular online role-playing game, where Weiwei’s character is abruptly dumped by her virtual husband. To save her gaming status, she accepts a sudden proposal from the mysterious and powerful player “Yixiao Naihe,” unaware that he is actually Xiao Nai in real life. Their virtual partnership soon leads to a real-life connection when Xiao Nai discovers Weiwei’s identity and starts pursuing her romantically in both the game and reality. As they grow closer, they navigate jealous rivals, social pressure, and their shared ambitions in the gaming industry. "Love 020" blends romance, technology, and personal growth, highlighting how love can blossom both online and offline when two people share passion, trust, and respect.',
      posterURL: 'https://images.justwatch.com/poster/143406290/s718/love-o2o.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/tiiN4rDwa8g?si=aZx2Mk-cAEMtLZvp'
    },{
      id:7,
      title: 'falling Into Your Smile',
      description: 'Falling Into Your Smile (你微笑时很美) is a 2021 Chinese romantic comedy drama set in the high-stakes world of professional e-sports. The story follows Tong Yao (played by Cheng Xiao), a talented and determined gamer who becomes the first official female player in Chinas professional league. Her exceptional skills earn her a spot on the prestigious all-male ZGDX team, led by the charismatic yet aloof captain Lu Si Cheng (played by Xu Kai). Despite facing skepticism from fans and teammates alike, Tong Yao is resolute in proving her worth. As she navigates the challenges of the competitive gaming world, she also grapples with her personal vow to avoid romantic entanglements within the industry. However, her growing rapport with Lu Si Cheng complicates matters, leading to a budding romance that must be balanced against professional aspirations. The series delves into themes of perseverance, breaking gender barriers, and the pursuit of dreams, all set against the backdrop of intense gaming tournaments and the evolving dynamics within the ZGDX team. Tong Yaos journey is one of resilience and passion, as she strives to make her mark in a male-dominated arena while staying true to herself.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDQxNDIxOTctNjcwOC00ZDFhLTk4ZTEtNjQ1ZTVmMDk5YmZmXkEyXkFqcGc@._V1_.jpg', 
      rating: 7,
      trailer: 'https://www.youtube.com/embed/T-3WjYwL5-I?si=okqRHkJDXJ2FAfjd'
    },{
      id:8,
      title: 'ski Into Love',
      description: 'Ski Into Love is a 2025 Chinese romantic drama that intertwines themes of personal growth, resilience, and the pursuit of passion against the backdrop of winter sports. The story follows Wei Zhi, a manga artist whose career is derailed by a scandal that strips her of her pen name and copyrights. Seeking inspiration and a fresh start, she travels to Beishan Ski Resort, where she meets Shan Chong, a former professional snowboarder who retired due to personal and familial pressures. As Wei Zhi learns to snowboard under Shan Chongs guidance, both characters confront their pasts and rediscover their passions. Their mentor-student relationship evolves into a romantic bond, culminating in Wei Zhi reclaiming her career and Shan Chong returning to competitive snowboarding. Together, they navigate challenges, support each others dreams, and find love on the slopes. ',
      posterURL: 'https://images.justwatch.com/poster/322898722/s718/ski-into-love.jpg', 
      rating: 9.5,
      trailer: 'https://www.youtube.com/embed/YOoA03TpZU8?si=ZFkSGtndsls70qkJ'
    },{
      id:9,
      title: 'everyone Loves Me',
      description: '"Everyone Loves Me" (Chinese title: 别对我动心 / Bie Dui Wo Dong Xin) is a 2024 Chinese romantic comedy drama that intertwines themes of love, identity, and the gaming world.The story centers on Yue Qianling, a talented and spirited game artist who has harbored a secret crush on her university classmate, Gu Xun. Upon graduation, she musters the courage to confess her feelings, only to face a public rejection. Unbeknownst to both, they have been interacting in an online game, where Yue Qianling adopts the alias "Sticky Dough Twist," a bold and assertive gamer admired by Gu Xun. As their virtual and real worlds collide, Gu Xun discovers the true identity of his online confidante, leading to a humorous and heartfelt journey of self-discovery and love. Set against the backdrop of a gaming company, the drama delves into the dynamics of workplace relationships, the challenges of unrequited love, and the serendipitous nature of destiny. With engaging performances and a blend of comedy and romance, "Everyone Loves Me" offers a refreshing take on modern relationships and the complexities of personal identity',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYWRiZjJiYzgtNzk3Mi00OThhLTk2YjctMGMxMjQyNThmM2IyXkEyXkFqcGc@._V1_.jpg', 
      rating: 7,
      trailer: 'https://www.youtube.com/embed/8HK2eyUTgVY?si=iMm30vOSjhdw0JN5'
    },{
      id:10,
      title: 'first frost',
      description: '"The First Frost" is a 2025 Chinese romantic drama that delves into themes of love, trauma, and healing. The story follows Wen Yifan, a journalist who returns to her hometown and unexpectedly reunites with her high school classmate, Sang Yan. Despite initial awkwardness, their frequent encounters lead to them becoming roommates due to unforeseen circumstances. As they navigate living together, their emotional barriers begin to break down, allowing their relationship to evolve from past misunderstandings to a deep, supportive bond. The series explores how love and understanding can help heal past wounds and build a future together.',
      posterURL: 'https://i.mydramalist.com/VXzRyz_4f.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/am6kaxykZlE?si=bFvcZGvLqc-ynzOd'
    },{
      id:11,
      title: 'admist a snowstorm of love',
      description: '"Amidst a Snowstorm of Love" (在暴雪时分) is a 2024 Chinese romance drama that intertwines themes of love, redemption, and the world of professional billiards.The story follows Lin Yiyang, a former snooker prodigy who left the sport after a public dispute with a referee led to his suspension. Years later, during a rare snowstorm in Finland, he meets Yin Guo, a rising star in the nine-ball billiards scene. Their chance encounter sparks an immediate connection, and through Yin Guos encouragement, Lin Yiyang is inspired to return to the professional billiards arena. As their relationship deepens, both face challenges in their personal and professional lives, striving to balance their burgeoning romance with their athletic aspirations. Together, they navigate the complexities of competition, ambition, and love, aiming to make significant contributions to the development of billiards in China.Chinese Drama, The series, based on a novel by Mo Bao Fei Bao, features a blend of sports action and heartfelt romance, set against the picturesque backdrops of Finland and China.',
      posterURL: 'https://image.tmdb.org/t/p/original/1v5ABzgSMlVJG2acb6S6JAkEM2S.jpg', 
      rating: 8,
      trailer: 'https://www.youtube.com/embed/rw7QePvBLgY?si=8iu2TReUjIDk5UQO'
    },{
      id:12,
      title: 'hidden love',
      description: '"Hidden Love" is a 2023 Chinese romantic drama that follows the story of Sang Zhi (played by Zhao Lusi), a young woman who harbors a secret crush on Duan Jiaxu (played by Chen Zheyuan), her older brothers best friend. Their relationship begins when Sang Zhi, at the age of 14, seeks Duan Jiaxus help to meet with her teacher, as her brother is unavailable. Over time, Sang Zhis feelings for Duan Jiaxu deepen, and despite the five-year age gap, their bond evolves from a childhood crush to a mature, romantic relationship. The drama explores themes of first love, personal growth, and the complexities of relationships over time.',
      posterURL: 'https://image.tmdb.org/t/p/original/8LqPbN3Vm8Xiaum4BwnbB0cHVZZ.jpg', 
      rating: 8,
      trailer: 'https://www.youtube.com/embed/tiwcMjH1dRw?si=8eY1Jij2h_nEc-vN'
    },
    {
      id:13,
      title: 'love game in eastern fantasy',
      description: '"Love Game in Eastern Fantasy" (永夜星河) is a 2024 Chinese fantasy romance drama that blends elements of xianxia, comedy, and adventure. The series follows Ling Miao Miao, a modern-day office worker who, after criticizing a fantasy novel online, finds herself transported into the very world of the book. She inhabits the body of Lin Yu, a villainous supporting character, and is tasked by a mysterious system to complete missions to return to her own world. These missions include defeating a formidable demon queen and winning the affection of Mu Sheng, a complex monster hunter with a hidden past. As Ling Miao Miao navigates this ancient realm, she forms bonds with other characters, confronts various challenges, and embarks on a journey of self-discovery and redemption. The drama explores themes of love, identity, and the blurred lines between good and evil, all set against a richly imagined fantasy backdrop. ',
      posterURL:'https://image.tmdb.org/t/p/original/pv1ulQkz5w0s9EH8dV3mjW6SABf.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/-2Tb4DwY6Mg?si=3CWqzKt577utntmJ'
    },    {
      id:14,
      title: 'use for my talent',
      description: '"Use for My Talent" (我亲爱的小洁癖) is a 2021 Chinese romantic comedy drama starring Jasper Liu and Shen Yue. The series follows the unlikely relationship between Gu Renqi, a wealthy and germophobic CEO of a cleaning company, and Shi Shuangjiao, a spirited woman who becomes his employee. Gu Renqi, shaped by a troubled family background, develops mysophobia and leads a life of isolation. He is the meticulous CEO of a cleaning company. Shi Shuangjiao, once cheerful, becomes disheveled and indifferent after losing her mother in a car accident. Their paths cross when Shuangjiao joins Renqis company as a cleaner. Despite their contrasting personalities, they begin to connect. Renqi finds that Shuangjiao doesnt trigger his mysophobia, and Shuangjiao starts to heal from her grief through their interactions. As their relationship deepens, they confront personal traumas and misunderstandings, including revelations about the car accident that claimed Shuangjiaos mother. Through mutual support, they overcome obstacles, leading to personal growth and a blossoming romance. The series combines humor and heartfelt moments, showcasing how love and understanding can help individuals heal and embrace life anew.',
      posterURL: 'https://i.pinimg.com/736x/37/82/f4/3782f49f6270daf8cc469bc2b5d462b7.jpg', 
      rating: 6,
      trailer: 'https://www.youtube.com/embed/kOlhVxsQVs8?si=l1_bxLp4NZHfhxvf'
    },{
      id:15,
      title: 'put your head on my shoulder',
      description: '"Put Your Head on My Shoulder" (致我们暖暖的小时光) is a 2019 Chinese romantic comedy drama that follows the journey of Si Tu Mo, an accounting student nearing graduation. Uncertain about her future and aspiring to work in advertising, she finds herself at a crossroads. Her life takes an unexpected turn when she crosses paths with Gu Wei Yi, a brilliant yet socially awkward physics student.Due to a housing arrangement orchestrated by their mothers, who are old friends, Si Tu Mo and Gu Wei Yi end up living under the same roof. As they navigate the challenges of cohabitation, their initial misunderstandings give way to mutual understanding and affection. Through shared experiences and personal growth, they develop a heartfelt romance, learning to support each others dreams and aspirations.The series beautifully captures the nuances of young love, personal development, and the transition from university life to the professional world. With its lighthearted narrative and endearing characters, "Put Your Head on My Shoulder" offers a charming portrayal of love blossoming in the most unexpected circumstances.',
      posterURL: 'https://image.tmdb.org/t/p/original/iuX0TRkczgbkd1tcJD01lvTWQRl.jpg', 
      rating: 6,
      trailer: 'https://www.youtube.com/embed/qSruSMJACmg?si=8L3jRaslPcOlXbG2'
    },{
      id:16,
      title: 'love between fairy and devil',
      description: '"Love Between Fairy and Devil" is a 2022 Chinese fantasy romance drama that intertwines themes of destiny, transformation, and forbidden love.The story centers on Dongfang Qingcang, the formidable Moon Supreme and Demon Lord, who was sealed away after waging war against the realm of gods. Ten thousand years later, Xiao Lanhua, a gentle and low-ranking orchid fairy, inadvertently releases him from his confinement. In the process, she casts the One Heart Curse, binding their lives and emotions together—causing them to share pain, feelings, and even fate. Initially, Dongfang Qingcang intends to sacrifice Xiao Lanhua to break his curse and reclaim his power. However, as they journey through the realms of fairies, demons, and humans, their bond deepens. Xiao Lanhuas unwavering kindness begins to thaw Dongfang Qingcangs cold exterior, leading him to experience emotions he had long suppressed. Their evolving relationship challenges the boundaries set by their respective worlds, highlighting the transformative power of love and the complexities of destiny. As they confront external threats and internal conflicts, both characters undergo significant personal growth, redefining their identities and purposes."Love Between Fairy and Devil" offers a compelling narrative filled with emotional depth, character development, and a richly imagined fantasy setting.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYTlhYWU3YTctNjMyYy00NWM0LTkzMDQtOTA5ZDRiMTUxNzhhXkEyXkFqcGc@._V1_.jpg', 
      rating: 10,
      trailer: 'https://www.youtube.com/embed/HrUeOw7zL40?si=roZWPtGoifGU5uiZ'
    },{
      id:17,
              title: 'the perfect match',
        description: 'The Perfect Match is a sweet and heartwarming romantic comedy set against the flavorful backdrop of gourmet cuisine and street food culture. Huo Ting En is a renowned and refined chef who trained at Le Cordon Bleu and runs a high-end restaurant called La Mure. He’s known for his strict culinary standards and cold demeanor. On the other hand, Wei Fen Qing is a passionate and outspoken street vendor who inherited her late father’s legendary noodle stall. Although their cooking styles are worlds apart, fate brings them together when Fen Qing becomes entangled in Ting Ens world through a televised cooking competition. Their initial relationship is marked by clashing personalities and philosophies about food, but as they spend more time together, a slow-burning romance begins to develop. Ting En is haunted by a mysterious past involving his late sister and a deep family secret that ties unexpectedly to Fen Qing’s history. As they work through misunderstandings, rivalries, and emotional baggage, they discover they may be the “perfect match” — not just in the kitchen, but in life and love.' ,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BODhlNDc1OWMtNmM2NC00OTFlLTllNjUtNDhjMDQ5MzRjODhmXkEyXkFqcGc@._V1_.jpg', 
        rating: 10,
        trailer: 'https://www.youtube.com/embed/9_-0nd243bA?si=zFD7vrzuD0Ka9GIa'

    },{
      id:18,
      title: 'the princess royal',
      description: '"The Princess Royal" (度华年) is a 2024 Chinese historical romance drama that intertwines themes of political intrigue, second chances, and enduring love. In the Great Xia Dynasty, Princess Li Rong and Prime Minister Pei Wenxuan enter into a political marriage devoid of affection. Over two decades, their relationship deteriorates amid court intrigues and personal betrayals, culminating in mutual destruction. However, fate grants them a second chance as they awaken in their 18-year-old selves, memories intact. Determined to alter their doomed past, they navigate youthful challenges, rekindle trust, and confront the conspiracies that once tore them apart. As they work together to reshape their destinies, a genuine bond blossoms, challenging the very forces that once led to their downfall. Adapted from Mo Shu Bais novel "The Grand Princess," this 40-episode series stars Zhao Jin Mai as Li Rong and Zhang Ling He as Pei Wenxuan. It is available for streaming on platforms like Youku, Viki, and Netflix.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYTJhMDI4NGYtNzdkYS00MjEzLWFiOWEtZjBmMzJlMmUxM2JkXkEyXkFqcGc@._V1_.jpg', 
      rating: 6,
      trailer: 'https://www.youtube.com/embed/ikFvxPqcc2U?si=eroM15hJ6kEGvTT1'
    },
    ])
    const [titleFilter, setTitleFilter] = useState('')
    const [ratingFilter, setRatingFilter] = useState('')
    const [form, setForm] = useState({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    })
  
    const handleAddMovie = (e) => {
      e.preventDefault()
      const { title, description, posterURL, rating } = form
      if (!title || !description || !posterURL || !rating) return
  
      const newMovie = {
        ...form,
        id: movies.length + 1,
      }
  
      setMovies([...movies, newMovie])
      setForm({ title: '', description: '', posterURL: '', rating: '' })
    }
  
    const filteredMovies = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim())
      const matchesRating = parseFloat(movie.rating) >= parseFloat(ratingFilter || 0)
      return matchesTitle && matchesRating
    })


 return (
   <div className='max-h-screen mt-30'>
     <Routes>
          <Route path="/" element={
          <div className=" space-y-10 overflow-x-hidden">
              {/* Navbar appears first */}
                <Navbar titleFilter={titleFilter} setTitleFilter={setTitleFilter} />
                {/* Movie List section*/}
                {
                  filteredMovies.length === 0 ? (
                    <div className="text-center text-[#2C3E50] font-bold text-2xl mt-8">
                      Movie Not Found..... 😞
                    </div>
                  ) : (
                    <MovieList movies={filteredMovies} />
                  )
                }
                {/* Filter Section */}
              <div className='p-10 bg-[#2C3E50] text-white'>
                <h1 className="text-3xl font-bold py-5">🎥 My Movie App</h1>
                <div className="flex flex-col md:flex-row gap-4 mb-5">
                  <input
                    type="text"
                    placeholder="Search by title"
                    className="p-2 border rounded w-full"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Minimum rating"
                    className="p-2 border rounded w-full"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                  />
                </div>
                {/* Add Movie Form */}
                <form onSubmit={handleAddMovie} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="block w-full p-2 border rounded"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="block w-full p-2 border rounded"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Poster URL"
                    className="block w-full p-2 border rounded"
                    value={form.posterURL}
                    onChange={(e) => setForm({ ...form, posterURL: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Rating (e.g., 9.5)"
                    className="block w-full p-2 border rounded"
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1A2533] text-white rounded-lg hover:bg-[#2C3E50] hover:border-2 hover:border-[#1A2533]"
                  >
                    Add Movie
                  </button>
                  {/* <Button text={'Add Movie'} className={' px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1A2533]'}/> */}
                </form>
                <footer className='text-center mt-3'>
                  <div> &copy; 2025 My Movie App. All rights reserved. </div>
                </footer>
              </div>
          </div>
            }/>
            <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
   </div>
  )
}

export default App
