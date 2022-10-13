/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import Github from '../img/logos/GitHub-Mark-32px.png';
import IG from '../img/logos/instagram.png';
import Twitter from '../img/logos/twitter.png';

const descriptionStyles = css`
  padding: 96px;
  text-align: center;
  .contact {
    margin: 12px;
    padding: 12px;
  }
  .contact > a + a {
    margin-left: 24px;
  }
`;

function Description() {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <br />
      <button
        onClick={() => setShowDescription(true)}
        className="btn btn-reverse"
      >
        Description
      </button>
      {showDescription && (
        <Drawer
          anchor="bottom"
          open={showDescription}
          onClick={() => setShowDescription(false)}
          PaperProps={{ style: { height: 'max-content' } }}
        >
          <div css={descriptionStyles}>
            <h4>Description</h4>

            <br />
            <p>
              This application randomly chooses from a pre-made list of
              restrictions that will help you get inspired. If you have any
              other ideas for restrictions, feel free to contact me!
              <br />
              Currently, there are more than 300 different combinations of
              restrictions - albeit of course some are not sensible. And,
              sometimes, things don't change. That's because the lists now do
              not have many things in them!
            </p>
            <hr />
            <br />
            <h4>Usage</h4>
            <p>
              By clicking on the "Get inspired" button, all three restrictions
              will be chosen randomly. If you toggle "Pause" in any field, this
              field will not be used the next time the button is pressed.
            </p>
            <hr />
            <br />
            <h4>Contact me</h4>
            <div className="contact">
              <a href="https://github.com/DerTimonius">
                <img src={Github} alt="Logo of GitHub" />
              </a>
              <a href="https://www.instagram.com/dertimonius/">
                <img src={IG} width={32} height={32} alt="Logo of Instagram" />
              </a>
              <a href="https://twitter.com/TimoniusCodes">
                <img
                  src={Twitter}
                  width={32}
                  height={32}
                  alt="Logo of Twitter"
                />
              </a>
            </div>

            <br />
            <button onClick={() => setShowDescription(false)} className="btn">
              Close
            </button>
          </div>
        </Drawer>
      )}
    </>
  );
}

export default Description;
