import React from 'react'

//loading animation before rendering book results for a better UX
export default function LoadingAnim({loading, setLoading}){	
	if (loading === true) {
        setTimeout(() => {
        	document.getElementsByClassName('lds-ellipsis')[0].style.display = 'none'
        	document.getElementsByClassName('book-list')[0].style.display = 'flex'
        	return setLoading(false)
        }, 2000)
        return (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
    }
    return null
}