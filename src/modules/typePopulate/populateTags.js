import Help from "../helper";

const GetTags = (() => {
    const palette =[
        "#d9413f",
        "#6d93c7",
        "#275B5C",
        "#52FFB8",
        "#59344F"
    ]

    const setClassColor = (tag, i) => {
        return tag.style.backgroundColor = palette[i]
    }
    const createTag = (target) => {
            let tags = target.tags
            let domTags = []

            for (let i = 0; i < tags.length; i++) {
                let tagText = Help.makeEl("p", {
                    class: "tag-text"
                }, tags[i])
                let tag = Help.makeEl("div", {
                    class: "tag-item"
                }, tagText)
                setClassColor(tag, i)
                domTags.push(tag)
            }
        return domTags
    }

    return {
        createTag,
    }
})()

export default GetTags