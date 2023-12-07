import s from './PageContent.module.scss'

const PageContent = () => {
	return (
		<div className={s.wrapper}>
			<h1>M-Social</h1>
			<h3>Добро пожаловать в админ-панель M-Social!</h3>
			<p>Используйте боковое меню, чтобы перейти к нужному разделу</p>
		</div>
	)
}

export default PageContent
