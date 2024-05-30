import React from 'react';
import photo from '../../assets/Moe.png';

const styles = {
  image: {
    margin: '20px',
    borderRadius: '5%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#42047e',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.6',
    backgroundColor: '#f5ccd4',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
};

export default function About() {
  return (
    <div>
      <h1 className="text-center" style={styles.h1}>About Me</h1>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <img src={photo} className="img-fluid" alt="Profile" style={styles.image} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12" style={styles.paragraph}>
          <p >

I am a multifaceted individual with a rich and diverse background, marked by a successful career in professional soccer and a robust academic and professional journey in computer science and software development.

For 12 years, I dedicated myself to the world of professional soccer, showcasing my talent, discipline, and passion on the field. My career in soccer not only honed my physical abilities but also instilled in me values of teamwork, perseverance, and strategic thinking, which I carry into my subsequent professional endeavors.

Parallel to my sports career, I pursued my academic interests in computer science at the University of Saskatchewan. Here, I immersed myself in the study of algorithms, programming languages, data structures, and software engineering principles. My academic journey provided me with a strong foundation in theoretical and practical aspects of computer science, preparing me for the challenges of the tech industry.
         </p>
        </div>
        <h1 className="text-center" style={styles.h1}> Email: <a href="mailto:moe.abbasi1983@gmail.com">Send Email</a></h1>
      </div>
    </div>
  );
}
