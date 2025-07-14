const db = firebase.database();
let currentNoteId = "note1";
const textarea = document.getElementById("note");
const noteIdInput = document.getElementById("noteId");
const loadBtn = document.getElementById("loadBtn");
const downloadBtn = document.getElementById("downloadBtn");
const themeToggle = document.getElementById("themeToggle");

// Load note from Firebase
function loadNote(id) {
  const noteRef = db.ref("notes/" + id);
  noteRef.on("value", snapshot => {
    const data = snapshot.val();
    if (data !== null && textarea.value !== data) {
      textarea.value = data;
    }
  });

  textarea.oninput = () => noteRef.set(textarea.value);
}

// Load initial note
loadNote(currentNoteId);

// Switch notes
loadBtn.onclick = () => {
  currentNoteId = noteIdInput.value.trim();
  if (currentNoteId) {
    textarea.value = "";
    loadNote(currentNoteId);
  }
};

// Export to .txt
downloadBtn.onclick = () => {
  const blob = new Blob([textarea.value], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = currentNoteId + ".txt";
  a.click();
};

// Dark mode toggle
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
};
