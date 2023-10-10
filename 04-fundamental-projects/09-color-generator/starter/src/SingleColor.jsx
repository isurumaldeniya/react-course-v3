import { toast } from "react-toastify";

function SingleColorComponent({ color, index }) {
  // console.log(index)
  const { weight, hex } = color;
  const classColor = index < 10 ? 'color false' : 'color color-light';

  async function copyToClipBoard(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Color copied successfully')
    } catch (error) {
      toast.error('Failed to copy text: ', error);
    }
  }

  return (
    <article className={classColor} style={{ backgroundColor: `#${hex}` }} onClick={() => copyToClipBoard(`#${hex}`)}>
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColorComponent;
