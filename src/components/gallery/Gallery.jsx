import style from "./Gallery.module.scss"

export const Gallery = (props) => {

    return (
        <section className={style.galleryWrapper}>
            {props.input_array.map((item, index) => {
                return (
                    <img key={index} src={item} alt={"image"+index}/>
                )
            })}
        </section>
    )
}