import {App, Editor, MarkdownView, Plugin} from 'obsidian';

export default class ObsidianFileLink extends Plugin {
	async onload() {
		this.addCommand({
			id: 'obidian-file-link',
			name: 'Create link to file',
			editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {
				let sel = editor.getSelection();
				if (checking) {
					return sel != '' &&
					       !/\r|\n/.exec(sel); // only when sth selected w/o line break
				} else {
					sel = sel.replace(/ /g, '%20'); // escape spaces in file names
					sel = "[](file://" + sel + ")"; // add link markup
					editor.replaceSelection(sel);
				};
			}
		})
	}
}