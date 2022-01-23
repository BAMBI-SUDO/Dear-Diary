import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dear Diary</title>
        <link rel="icon" href="/ddicon.png" />
      </Head>

      <main>
      
        <h1 className="title">
          Dear Diary 
        </h1>

        <p className="description">
          Learn More About Tshedza Managa
        </p>
        <img src="img_avatar.jpeg" alt="Avatar"/>

        

        <div className="grid">
          <a className="card" >
            <h3> Who is Tshedza Managa?</h3>
            <p>
            Tshedza is someone driven by curiosity and a need to better understand the world around her. she is someone who 
            considers herself self-aware and opinionated but at the same time someone who quietly observes but all in all she 
            is someone who wants to understand how things work, from the minds of others to the environment around her. She is 
            someone who enjoys to learn and also teach others what she understands.
            </p>
          </a>

          <a  className="card">
           <h3>Mottos </h3>
              <p> 1. Aspire to inspire before you expire.</p>
              <p> 2. Go big or go home.</p>
              <p> 3. To think big you need to think outside the box.</p>
              <p> 4. Leave the problems of tomorrow to the you of tomorrow.</p>
              <p> 5. One is born empty handed and dies empty handed. Therefore, SPEND!</p>
          </a>

          <a
            className="card"
          >
            <h3>Things I Have learned </h3>
            <h4>
              Patience.</h4>
              <p>Patience is need to teach but also to understand and learn. Patience allows you to communicate 
              better with others because not only are you will to listen but also explain.</p>
              <h4>Responsiblity.</h4>
              <p>Being Responsible helps you grow and be more dependable. Being able to admit to mistakes and allowing 
              others to help you allows you grow and with this growth you are able to guide others and be someone others
              can depend on. </p>
              <h4>self awareness.</h4>
              <p>Being self aware means understanding your weaknesses as well as understanding your strengths.
              This also allows you to work on your weaknesses to be a better individual and teammate.
            </p>
          </a>

          <a
            className="card"
          >
            <h3>Why SovTech? </h3>
            <p>
              I have always believed that when picking a career path it needed to be a path i found joy in being apart of. 
              I have also believed that a work environment is just as important and I will always be looking for one that not only pushes
              me to grow but also respects my opinions and input. I believe that SovTech is a place that will allow me to be myself and continuously learn,
              it will challenge me as an individual and allow me to be comfortable while feeling apart of a family.
              </p>
              <p>
              I think SovTech is a place that will allow me to grow and learn but also provide the comfort of being apart of a family that works together,
              i believe that i will be in a place that takes my opinions into consideration but also pushes me to be the best version of myself and the thought of 
              being apart of such and environment excites me.
            </p>
          </a>


          <a
            href="https://www.linkedin.com/in/tshedza-managa-892266209"
            className="card"
          >
            <h3>LinkedIn &rarr;</h3>
            <p>Connect on linkedin.</p>
          </a>

          <a
            href="https://instagram.com/marielyn143?utm_medium=copy_link"
            className="card"
          >
            <h3> Instagram &rarr;</h3>
            <p>
            Connect on instagram. 
            </p>
          </a>
        </div>
      </main>
      
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
          border-radius: 50%;
          width: 10%;
          height: 100px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #9f9f9f;
          border-radius: 10px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #464646;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-image: url('img4.jpg');
        }
        
        * {

          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
