import styles from './CodeBlock.module.css';
import { Character, Characters } from '../../types';
import { arrayChunk } from '../../utils/arrays';

type Props = {
  characterSet: Characters;
};

const CodeBlock = ({ characterSet }: Props) => {
  const characters = characterSet.set;
  return (
    <>
      <button className={styles.copyBtn}>Copy</button>
      <div className={styles.codeblock}>
        {characters.map((character: Character) => {
          const binaryChunks = arrayChunk(character.binaryArray, 21);
          const x = parseInt(binaryChunks[0].join(''), 2).toFixed(1);
          const y = parseInt(binaryChunks[1].join(''), 2).toFixed(1);
          return (
            <pre>
              <code>
                {`vec4 glyph${character.character}(vec2 uv, inout vec3 printPos, vec4 textColor) {
    return glyph(vec2(${x},${y}), uv, printPos) * textColor;
}`}
              </code>
            </pre>
          );
        })}
      </div>
    </>
  );
};

export default CodeBlock;
