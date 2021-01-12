import React from 'react'

//loading animation before rendering book results for a better UX
export default function LoadingAnim({loading, setLoading}){	
	if (loading === true) {
        setTimeout(() => {
        	document.getElementsByClassName('lds-ellipsis')[0].style.display = 'none'
        	document.getElementsByClassName('book-list')[0].style.display = 'flex'
        	return setLoading(false)
        }, 3000)
        return (
        	<>
	        	<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
	        	<p>Hint: click on book title to see more about</p>
        	</>
        )
    }
    return null
}