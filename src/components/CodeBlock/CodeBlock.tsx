import styles from './CodeBlock.module.css';
import data from '../../data/characters.json';
import { Character } from '../../types';

const CodeBlock = () => {
  const characters = data.set;

  return (
    <div className={styles.codeblock}>
      {characters.map((character: Character) => (
        <pre>
          <code>
            {`vec4 glyph${character.character}(vec2 uv, inout vec3 printPos, vec4 textColor) {
    return glyph(vec2(224.0,649374.0), uv, printPos) * textColor;
}`}
          </code>
        </pre>
      ))}
    </div>
  );
};

export default CodeBlock;
