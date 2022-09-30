import React from "react";
import ParralaxHero from "./ParralaxHero";

export default function LandingPage() {
  return (
    <div className="landing-page-content">
      <ParralaxHero />

      {/*  
      --------------
      Intro Section -> "Learn More About Studying Chinese With This Input System"
      --------------
      */}

      <div className="twoTileSection">
        <div className="landing-container">
          <br />
          <br />
          <h2>What Is 5 Tone Pinyin?</h2>
          <h3>Typing Using Correct Chinese Pronunciation</h3>
          <br />
          <p>
            “What I find remarkable is that this text has been the industry's
            standard dummy text ever since some printer in the 1500s took a
            galley of type and scrambled it to make a type specimen book; it has
            survived not only four centuries of letter-by-letter resetting but
            even the leap into electronic typesetting, essentially unchanged
            except for an occasional 'ing' or 'y' thrown in. It's ironic that
            when the then-understood Latin was scrambled, it became as
            incomprehensible as Greek; the phrase 'it's Greek to me' and
            'greeking' have common semantic roots!” (The editors published his
            letter in a correction headlined “Lorem Oopsum”).
          </p>
          <p>
            “What I find remarkable is that this text has been the industry's
            standard dummy text ever since some printer in the 1500s took a
            galley of type and scrambled it to make a type specimen book; it has
            survived not only four centuries of letter-by-letter resetting but
            even the leap into electronic typesetting, essentially unchanged
            except for an occasional 'ing' or 'y' thrown in. It's ironic that
            when the then-understood Latin was scrambled, it became as
            incomprehensible as Greek; the phrase 'it's Greek to me' and
            'greeking' have common semantic roots!” (The editors published his
            letter in a correction headlined “Lorem Oopsum”).
          </p>
        </div>

        <div className="landing-container">
          <div className="section-img-frame">
            <img
              src="https://i.postimg.cc/Gh1GdwM8/Chinese-keyboard-yellow.jpg"
              alt="big mountain range"
              className="section-img"
            />
          </div>
        </div>
      </div>

      {/*  
      --------------
      Tones -> "Learn More About Chinese Tones"  
      --------------
      */}

      <div className="twoTileSection">
        <div className="landing-container">
          <div className="section-img-frame">
            <img
              src="https://i.postimg.cc/1tDJt5P2/Chinese-Tones-dark.jpg"
              alt="big mountain range"
              className="section-img"
            />
          </div>
        </div>
        <div className="landing-container">
          <br />
          <br />
          <h2>What Are Chinese Tones?</h2>
          <h3>Subtitle explaining what is going on</h3>
          <br />
          <p>
            Mandarin is what is called a ‘tonal language’, which means that if
            you pronounce a word or any part of a word in a different pitch,
            then it can mean a completely different thing.{" "}
          </p>
          <p>
            Tones are an essential part of proper pronunciation. In Mandarin
            Chinese, many characters have the same sound. Therefore tones are
            necessary when speaking Chinese in order to differentiate words from
            each other.
          </p>
          <p>
            Thus when learning new vocabulary, it is really important to
            practice both the pronunciation of the word and its tone. The wrong
            tones can change the meaning of your sentences.{" "}
          </p>
          <ul>
            <li>First tone (ma1 or mā): A level and higher pitch</li>
            <li>
              Second tone (ma2 or má): Rising, start from a lower pitch and end
              at a slightly higher pitch
            </li>
            <li>
              Third tone (ma3 or mǎ): Falling rising, start at a neutral tone
              then dip to a lower pitch before ending at a higher pitch
            </li>
            <li>
              Fourth tone (ma4 or mà): Falling, start the syllable at a slightly
              higher than neutral pitch then go quickly and strongly downwards
            </li>
            <li>
              Fifth tone (ma0 or ma): There is some debate among those who teach
              Chinese whether there are four or five isolated tones in the
              language. This is because many describe the fifth note as neutral,
              without any intonation.
            </li>

            <p>
              While native speakers will only conciously use the first four
              tones, it is important for those learning Chinese as a second
              language to take not of which characters are neutral.
            </p>
          </ul>
        </div>
      </div>

      {/*  
      --------------
      Intro Section -> "Start Free Typeing" & "Test Yourself At Different HSK Levels"
      --------------
      */}

      <div className="twoTileSection">
        <div className="landing-container">
          <br />
          <br />
          <h2>How Can I Practice?</h2>
          <h3>Two methods to practice</h3>
          <br />
          <p>
            <b>Free Typing</b>
          </p>
          <p>
            “What I find remarkable is that this text has been the industry's
            standard dummy text ever since some printer in the 1500s took a
            galley of type and scrambled it to make a type specimen book; it has
            survived not only four centuries of letter-by-letter resetting but
            even the leap into electronic typesetting, essentially unchanged
            except for an occasional 'ing' or 'y' thrown in. It's ironic that
            when the then-understood Latin was scrambled, it became as
            incomprehensible as Greek; the phrase 'it's Greek to me' and
            'greeking' have common semantic roots!” (The editors published his
            letter in a correction headlined “Lorem Oopsum”).
          </p>
          <p>
            <b>Copy Test Texts</b>
          </p>
          <p>
            “What I find remarkable is that this text has been the industry's
            standard dummy text ever since some printer in the 1500s took a
            galley of type and scrambled it to make a type specimen book; it has
            survived not only four centuries of letter-by-letter resetting but
            even the leap into electronic typesetting, essentially unchanged
            except for an occasional 'ing' or 'y' thrown in. It's ironic that
            when the then-understood Latin was scrambled, it became as
            incomprehensible as Greek; the phrase 'it's Greek to me' and
            'greeking' have common semantic roots!” (The editors published his
            letter in a correction headlined “Lorem Oopsum”).
          </p>
        </div>

        <div className="landing-container">
          <div className="section-img-frame">
            <img
              src="https://i.postimg.cc/MKLPdLss/chastagner-thierry-blue.jpg"
              alt="big mountain range"
              className="section-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
