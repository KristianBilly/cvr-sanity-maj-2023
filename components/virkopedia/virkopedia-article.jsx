import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import cc from 'classcat'

export const VirkopediaArticle = ({ selectedArticle }) => {
  const {
    content,
    title,
    richText,
    image,
    imageUrl,
    button,
    imagePositionTop,
    lastEdited,
  } = selectedArticle
  const shouldRenderSignUpButton = button === 'sign-up'
  const shouldRenderBlueButton = button === 'blue'

  console.log(selectedArticle)
  return (
    <article className="virkopedia-article">
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
      {richText && <PortableText value={richText} />}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={image?.alt}
          width={50}
          height={50}
          className={cc({ 'virkopedia-picture-top': imagePositionTop })}
        />
      )}
      <div className="">
        {shouldRenderSignUpButton && (
          <button onClick={() => alert('You signed up')}>{button}</button>
        )}
        {shouldRenderBlueButton && (
          <button
            className="virkopedia-blue-button"
            onClick={() => alert('You Pressed a Blue Button')}>
            {button}
          </button>
        )}
        {lastEdited && <p>Last edited: {lastEdited}</p>}
      </div>
    </article>
  )
}
