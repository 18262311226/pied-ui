export const getImgElements = (itemElements) => {
    const imgElements = []
    itemElements.forEach((el) => {
        imgElements.push(...el.getElementsByTagName('img'))
    })

    return imgElements
}

export const getAllImg = (imgElements) => {
    return imgElements.map(imgElement => {
        return imgElement.src
    })
}

export const onComplateImgs = (imgs) => {
    let promiseAll = []
    imgs.forEach((img, index) => {
        promiseAll[index] =  new Promise((resolve, reject) => {
            const imageObj = new Image()
            imageObj.src = img
            imageObj.onload = () => {
                resolve({
                    img,
                    index
                }) 
            }
        })
    })
    return Promise.all(promiseAll)
}

export const getMinHeight = (columnHeightObj) => {
    const columnHeightArr = Object.values(columnHeightObj)
    return Math.min(...columnHeightArr)
}

export const getMaxHeight = (columnHeightObj) => {
    const columnHeightArr = Object.values(columnHeightObj)
    return Math.max(...columnHeightArr)
}

export const getMinHeightColumn = (columnHeightObj) => {
    const minHeight = getMinHeight(columnHeightObj)
    return Object.keys(columnHeightObj).find(keys => {
        return columnHeightObj[keys] === minHeight
    })
}