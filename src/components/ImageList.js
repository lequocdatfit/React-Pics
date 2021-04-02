import React from 'react';

const ImageList =  (props) => {
	const images = props.images.map(({description, urls, id}) => 
	<img key={id} src={urls.regular} alt={description} />)

	return(
		<div className="ImageList">
			{images}
		</div>
	)
}

export default ImageList;