import { useState } from 'react';
import Typical from 'react-typical';
import { randomizeOutput } from '../utils/randomizer';

const subjectsArr = [
  'Portraits',
  'Street Photography',
  'Animals/Insects',
  'Fruits/Flowers',
  'Architecture',
  'Light/Shadow',
  'Landscape',
  'Woodland',
  'Macro Photography',
  'Reflexions',
];

const restrictionsArr = [
  'Use a 35mm prime lens',
  'Use a 50mm prime lens',
  'Use a 85mm prime lens',
  'Use your widest focal length',
  'Use your longest focal length',
  'Shoot only wide open',
  'Shoot only at f/8',
];

const gimmicksArr = [
  'Long exposure',
  'Intentional camera movement/ICM',
  'Use a prism/lensball',
  'Use at least one filter (e.g. ND, polarizer, mist)',
  'Stand in one spot and take 5 different photos',
  'black/white',
];
function Restrictions() {
  const [subject, setSubject] = useState(randomizeOutput(subjectsArr));
  const [restriction, setRestriction] = useState(
    randomizeOutput(restrictionsArr),
  );
  const [gimmick, setGimmick] = useState(randomizeOutput(gimmicksArr));
  const [subjectPaused, setSubjectPaused] = useState(false);
  const [restrictionPaused, setRestrictionPaused] = useState(false);
  const [gimmickPaused, setGimmickPaused] = useState(false);

  function handleClick() {
    if (gimmickPaused === false) {
      setGimmick(randomizeOutput(gimmicksArr));
    }
    if (restrictionPaused === false) {
      setRestriction(randomizeOutput(restrictionsArr));
    }
    if (subjectPaused === false) {
      setSubject(randomizeOutput(subjectsArr));
    }
  }

  return (
    <div>
      <div className="inspiration">
        <div className="subjects-container">
          <h2>Subject/Motive</h2>
          <div className="subject">
            <Typical wrapper="h4" steps={[subject, 1000]} />
            <label>
              <input
                type="checkbox"
                checked={subjectPaused}
                onChange={(e) => setSubjectPaused(e.currentTarget.checked)}
              />
              Pause
            </label>
            {/* Pause */}
          </div>
        </div>
        <div className="subjects-container">
          <h2>Restrict your gear</h2>
          <div className="subject">
            <Typical wrapper="h4" steps={[restriction, 1000]} />
            <label>
              <input
                type="checkbox"
                checked={restrictionPaused}
                onChange={(e) => setRestrictionPaused(e.currentTarget.checked)}
              />
              Pause
            </label>
          </div>
        </div>
        <div className="subjects-container">
          <h2>Gimmicks to use</h2>
          <div className="subject">
            <Typical wrapper="h4" steps={[gimmick, 1000]} />
            <label>
              <input
                type="checkbox"
                checked={gimmickPaused}
                onChange={(e) => setGimmickPaused(e.currentTarget.checked)}
              />
              Pause
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="btn">
        Get inspired!
      </button>
    </div>
  );
}

export default Restrictions;
