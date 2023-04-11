const DEFAULT_PARAMS = {
    isFilesAvailable: false,
    isContentAvailable: false,
    filesName: null,
    filesPath: null,
    filesChosen: null,
    isFilesChosenAvailable: false,
    content: null,
    isImageLoading: false,
    experimentName: null,
};

const initState = {
    ...DEFAULT_PARAMS,
}

//action redux
const files = (state = initState, action) => {
    switch (action.type) {
        case "content_addContent":
            state.content = action.content;
            state.isContentAvailable = true;
            state.isImageLoading = true;
            break;
        case "files_addFiles":
            state.filesName = action.content.filesName;
            state.filesPath = action.content.filesPath;
            state.isFilesAvailable = true;
            break
        case "files_removeAllFiles":
            state.files = null;
            state.isFilesAvailable = false;
            break;
        case "image_loading_state_change":
            state.isImageLoading = action.content
            break;
        case "register_experiment_name":
            state.experimentName = action.content
            break;
        default:
            break;
    }
    return { ...state }
};

export default files;