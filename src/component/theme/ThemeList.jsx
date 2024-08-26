import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ThemeList = ({ themes, moveToDetail, getThemeBackgroundImage }) => {


    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={3000}
            stopOnHover={true}
        >
            {themes.map(theme => (
                <div key={theme.id} onClick={() => moveToDetail(theme.id)}>
                    <div className="themeThumbnail">
                        <img src={getThemeBackgroundImage(theme.themeBackground)} alt={theme.themeName} />
                    </div>
                    <span className='themeTitle'>{theme.themeName}</span>
                </div>
            ))}
        </Carousel>
    );
};

export default ThemeList;
