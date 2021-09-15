const FormatDate = {
    DateForm(date) {
        const dateTransform = new Date(date).toLocaleString('fr-FR').slice(0, -3).replace(/:/g, "h");
        return dateTransform;
    }
};

export default FormatDate;