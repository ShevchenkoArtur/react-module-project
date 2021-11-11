const formatDate = (date) => {

    if (!date) {
        return ''
    }

    const arrOfDate = date.format().split('-')
    arrOfDate[2] = arrOfDate[2].substr(0, 2)
    return (arrOfDate.join('-'));
}

export default formatDate;