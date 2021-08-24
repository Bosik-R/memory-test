import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import * as S from './ThemeButton.Elements';

const ThemeButton = () => {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	//const darkTheme = true;

	return (
		<S.ThemeButton darkTheme={true} onClick={() => setDarkTheme(!darkTheme)}>
			<S.Slider darkTheme={true}></S.Slider>
			<S.IconLight />
			<S.IconDark />
		</S.ThemeButton>
	);
};

export default ThemeButton;
