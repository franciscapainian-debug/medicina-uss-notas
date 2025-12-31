/* --- BASE DE DATOS DE LA MALLA --- */
/* Estructura: id, semestre, nombre, creditos, requisitos (array de IDs) */
const subjectsDB = [
    // --- SEMESTRE 1 ---
    { id: 's1_bio', sem: 1, name: 'Biología Celular', cr: 4, req: [] },
    { id: 's1_quim', sem: 1, name: 'Química Gral. y Orgánica', cr: 5, req: [] },
    { id: 's1_mat', sem: 1, name: 'Bases Físico-Matemáticas', cr: 5, req: [] },
    { id: 's1_bases', sem: 1, name: 'Bases y Fundamentos', cr: 4, req: [] },
    { id: 's1_abp1', sem: 1, name: 'Integración ABP I', cr: 5, req: [] },
    { id: 's1_estrat', sem: 1, name: 'Estrategias Aprendizaje', cr: 4, req: [] },

    // --- SEMESTRE 2 ---
    { id: 's2_biomol', sem: 2, name: 'Biología Molecular', cr: 5, req: ['s1_bio'] },
    { id: 's2_bioq', sem: 2, name: 'Bioquímica General', cr: 4, req: ['s1_bio', 's1_quim'] },
    { id: 's2_soporte', sem: 2, name: 'Soporte Básico Vital', cr: 3, req: ['s1_bio'] },
    { id: 's2_hist', sem: 2, name: 'Historia Medicina', cr: 3, req: ['s1_bases'] },
    { id: 's2_morfo1', sem: 2, name: 'Morfología Integrada I', cr: 9, req: ['s1_abp1'] },
    { id: 's2_abp2', sem: 2, name: 'Integración ABP II', cr: 4, req: ['s1_abp1'] },
    { id: 's2_antro', sem: 2, name: 'Antropología', cr: 4, req: [] },

    // --- SEMESTRE 3 ---
    { id: 's3_bioest', sem: 3, name: 'Bioestadística y MBE', cr: 3, req: [] },
    { id: 's3_micro', sem: 3, name: 'Microbiología Médica', cr: 4, req: ['s2_soporte', 's2_biomol'] },
    { id: 's3_fisio', sem: 3, name: 'Fisiología Médica', cr: 7, req: ['s2_biomol', 's2_morfo1', 's2_bioq'] },
    { id: 's3_psico', sem: 3, name: 'Psicología Aplicada', cr: 4, req: ['s2_hist'] },
    { id: 's3_morfo2', sem: 3, name: 'Morfología Integrada II', cr: 8, req: ['s2_morfo1', 's2_biomol'] },
    { id: 's3_etica', sem: 3, name: 'Ética', cr: 4, req: ['s2_antro'] },

    // --- SEMESTRE 4 ---
    { id: 's4_fisiopat', sem: 4, name: 'Fisiopatología Médica', cr: 8, req: ['s3_fisio'] },
    { id: 's4_saludpop', sem: 4, name: 'Salud Poblacional', cr: 4, req: ['s3_bioest'] },
    { id: 's4_morfo3', sem: 4, name: 'Morfología Integrada III', cr: 8, req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_razon1', sem: 4, name: 'Razonamiento Clínico I', cr: 5, req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_elect1', sem: 4, name: 'Electivo Integral I', cr: 4, req: ['s3_etica'] }, // Requisito Ética segun lista

    // --- SEMESTRE 5 ---
    { id: 's5_semio1', sem: 5, name: 'Semiología I', cr: 10, req: ['s4_fisiopat', 's4_morfo3', 's4_razon1', 's1_bases'] },
    { id: 's5_patol', sem: 5, name: 'Patología Médica', cr: 7, req: ['s3_micro', 's4_morfo3'] },
    { id: 's5_epidem', sem: 5, name: 'Epidemiología', cr: 4, req: ['s4_saludpop'] },
    { id: 's5_bioet', sem: 5, name: 'Bioética', cr: 2, req: ['s4_razon1'] },
    { id: 's5_elect2', sem: 5, name: 'Electivo Integral II', cr: 4, req: [] },
    { id: 's5_elect3', sem: 5, name: 'Electivo Integral III', cr: 4, req: [] },

    // --- SEMESTRE 6 ---
    { id: 's6_semio2', sem: 6, name: 'Semiología II', cr: 10, req: ['s5_semio1', 's5_patol'] },
    { id: 's6_farm', sem: 6, name: 'Farmacología Gral.', cr: 7, req: ['s5_patol'] },
    { id: 's6_metod', sem: 6, name: 'Metodología Inv.', cr: 3, req: ['s3_bioest'] },
    { id: 's6_sdig', sem: 6, name: 'Salud Digital', cr: 3, req: ['s5_semio1'] },
    { id: 's6_razon2', sem: 6, name: 'Razonamiento Clínico II', cr: 2, req: ['s5_semio1', 's5_patol'] },
    { id: 's6_elect4', sem: 6, name: 'Electivo Integral IV', cr: 4, req: [] },

    // --- SEMESTRE 7 ---
    { id: 's7_med1', sem: 7, name: 'Medicina Interna I', cr: 13, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_cir1', sem: 7, name: 'Cirugía I', cr: 10, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_psiq1', sem: 7, name: 'Psiquiatría I', cr: 6, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_pueb', sem: 7, name: 'Salud Pueblos Orig.', cr: 3, req: ['s6_razon2'] },

    // --- SEMESTRE 8 ---
    { id: 's8_med2', sem: 8, name: 'Medicina Interna II', cr: 13, req: ['s7_med1'] },
    { id: 's8_cir2', sem: 8, name: 'Cirugía II', cr: 10, req: ['s7_cir1'] },
    { id: 's8_psiq2', sem: 8, name: 'Psiquiatría II', cr: 5, req: ['s7_psiq1'] },
    { id: 's8_legal', sem: 8, name: 'Medicina Legal', cr: 3, req: ['s7_pueb'] },

    // --- SEMESTRE 9 ---
    { id: 's9_ped1', sem: 9, name: 'Pediatría I', cr: 10, req: ['s8_med2', 's8_psiq2', 's8_legal'] },
    { id: 's9_gine1', sem: 9, name: 'Ginecología I', cr: 10, req: ['s8_med2', 's8_cir2', 's8_legal'] },
    { id: 's9_esp1', sem: 9, name: 'Especialidades I', cr: 5, req: ['s8_med2'] },
    { id: 's9_fam', sem: 9, name: 'Medicina Familiar', cr: 3, req: ['s8_med2'] },
    { id: 's9_palia', sem: 9, name: 'Cuidados Paliativos', cr: 2, req: ['s8_med2', 's8_cir2', 's8_psiq2', 's8_legal'] },
    { id: 's9_spob', sem: 9, name: 'Salud Pob. Aplicada', cr: 2, req: ['s8_legal'] },

    // --- SEMESTRE 10 ---
    { id: 's10_ped2', sem: 10, name: 'Pediatría II', cr: 10, req: ['s9_ped1'] },
    { id: 's10_gine2', sem: 10, name: 'Ginecología II', cr: 10, req: ['s9_gine1'] },
    { id: 's10_esp2', sem: 10, name: 'Especialidades II', cr: 5, req: ['s9_fam', 's9_palia'] },
    { id: 's10_urg', sem: 10, name: 'Med. Urgencia y Trauma', cr: 4, req: ['s9_ped1', 's9_gine1', 's9_palia'] },
    { id: 's10_raz3', sem: 10, name: 'Razonamiento Clínico III', cr: 2, req: ['s9_fam', 's9_palia'] },

    // --- CICLO INTERNADOS (REQ: LICENCIATURA = 1 a 10 APROBADOS) ---
    { id: 's11_intmed', sem: 11, name: 'Int. Med. Interna', cr: 19, req: ['LICENCIATURA'] },
    { id: 's11_intped', sem: 11, name: 'Int. Pediatría', cr: 19, req: ['LICENCIATURA'] },

    { id: 's12_intmen', sem: 12, name: 'Int. Salud Mental', cr: 10, req: ['LICENCIATURA'] },
    { id: 's12_intfam', sem: 12, name: 'Int. Med. Familiar', cr: 10, req: ['LICENCIATURA'] },
    { id: 's12_intelt1', sem: 12, name: 'Int. Electivo I', cr: 10, req: ['LICENCIATURA'] },

    { id: 's13_intesp', sem: 13, name: 'Int. Esp. Med. Interna', cr: 10, req: ['s11_intmed', 's12_intmen'] },
    { id: 's13_intcir', sem: 13, name: 'Int. Cirugía', cr: 19, req: ['s11_intmed'] },
    { id: 's13_intelt2', sem: 13, name: 'Int. Electivo II', cr: 10, req: ['s11_intped', 's12_intfam'] },

    { id: 's14_intgin', sem: 14, name: 'Int. Ginecología', cr: 19, req: ['s13_intesp', 's13_intcir'] },
    { id: 's14_inturg', sem: 14, name: 'Int. Urgencia', cr: 10, req: ['s11_intmed', 's11_intped', 's13_intcir', 's12_intfam'] },
    { id: 's14_raz4', sem: 14, name: 'Razonamiento Clínico IV', cr: 3, req: ['s13_intesp', 's13_intcir', 's13_intelt2'] }
];

/* --- ESTADO DE LA APLICACIÓN --- */
// Objeto que guarda { 'id_ramo': nota }
let grades = JSON.parse(localStorage.getItem('medicinaGrades')) || {};
let currentSubject = null; // Para el modal

function init() {
    renderGrid();
    updateGPA();
}

/* LOGICA DE PRERREQUISITOS */
function checkLicenciatura() {
    // Revisa si TODOS los ramos de semestre 1 al 10 tienen nota
    return subjectsDB.filter(s => s.sem <= 10).every(s => grades.hasOwnProperty(s.id));
}

function getMissingRequirements(subject) {
    let missing = [];
    
    // Check especial Licenciatura
    if (subject.req.includes('LICENCIATURA')) {
        if (!checkLicenciatura()) missing.push("Licenciatura (Todo Sem 1-10)");
    }

    // Check normal de IDs
    subject.req.forEach(rId => {
        if (rId !== 'LICENCIATURA') {
            if (!grades.hasOwnProperty(rId)) {
                let reqObj = subjectsDB.find(s => s.id === rId);
                if (reqObj) missing.push(reqObj.name);
            }
        }
    });
    return missing;
}

function isLocked(subject) {
    return getMissingRequirements(subject).length > 0;
}

/* RENDERIZADO VISUAL */
function renderGrid() {
    const container = document.getElementById('malla-container');
    container.innerHTML = ''; // Limpiar

    for (let i = 1; i <= 14; i++) {
        // Columna Semestre
        let col = document.createElement('div');
        col.className = 'semester-column';
        
        let title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `Sem ${i}`;
        col.appendChild(title);

        // Ramos del Semestre
        let semesterSubjects = subjectsDB.filter(s => s.sem === i);
        
        semesterSubjects.forEach(sub => {
            let card = document.createElement('div');
            card.className = 'card';
            
            // Contenido Texto
            let nameSpan = document.createElement('div');
            nameSpan.innerText = sub.name;
            let credSpan = document.createElement('div');
            credSpan.className = 'card-credits';
            credSpan.innerText = `${sub.cr} créditos`;
            
            card.appendChild(nameSpan);
            card.appendChild(credSpan);

            // Estado
            if (grades.hasOwnProperty(sub.id)) {
                card.classList.add('approved');
                // Badge con nota
                let badge = document.createElement('div');
                badge.className = 'badge-grade';
                badge.innerText = grades[sub.id];
                card.appendChild(badge);
            } else if (isLocked(sub)) {
                card.classList.add('locked');
                // Icono candado visual
                let lock = document.createElement('span');
                lock.innerText = "🔒";
                lock.style.cssText = "position:absolute; top:2px; right:2px; font-size:10px;";
                card.appendChild(lock);
            }

            // Click Event
            card.onclick = () => handleSubjectClick(sub);

            col.appendChild(card);
        });

        container.appendChild(col);
    }
}

/* MANEJO DE CLICKS */
function handleSubjectClick(sub) {
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('modal-title');
    const mMsg = document.getElementById('modal-message');
    const mForm = document.getElementById('grade-input-container');
    const mInput = document.getElementById('grade-input');

    currentSubject = sub;
    mForm.style.display = 'none';
    mMsg.innerHTML = '';

    // CASO 1: YA APROBADO -> Preguntar si borrar
    if (grades.hasOwnProperty(sub.id)) {
        mTitle.innerText = sub.name;
        mMsg.innerText = `Aprobado con nota ${grades[sub.id]}. ¿Deseas borrar esta nota?`;
        // Usamos un confirm nativo por simplicidad o reutilizamos modal
        if (confirm(`¿Borrar nota de ${sub.name}?`)) {
            delete grades[sub.id];
            saveData();
        }
        return;
    }

    // CASO 2: BLOQUEADO -> Mostrar errores
    let missing = getMissingRequirements(sub);
    if (missing.length > 0) {
        mTitle.innerText = "Ramo Bloqueado 🔒";
        mMsg.innerHTML = "Debes aprobar primero:<br>• " + missing.join("<br>• ");
        modal.style.display = 'block';
        return;
    }

    // CASO 3: DISPONIBLE -> Pedir Nota
    mTitle.innerText = "Aprobar: " + sub.name;
    mForm.style.display = 'block';
    mInput.value = '';
    mInput.focus();
    modal.style.display = 'block';
}

/* GUARDAR NOTA */
function confirmGrade() {
    const input = document.getElementById('grade-input');
    let val = parseFloat(input.value.replace(',', '.')); // Acepta comas

    if (isNaN(val) || val < 1.0 || val > 7.0) {
        alert("Nota inválida. Usa rango 1.0 a 7.0");
        return;
    }

    if (currentSubject) {
        grades[currentSubject.id] = val;
        closeModal();
        saveData();
    }
}

/* CALCULO PGA (Promedio Ponderado) */
function updateGPA() {
    let totalCredits = 0;
    let weightedSum = 0;

    // Iterar sobre las notas guardadas
    for (const [id, grade] of Object.entries(grades)) {
        let sub = subjectsDB.find(s => s.id === id);
        if (sub) {
            weightedSum += (grade * sub.cr);
            totalCredits += sub.cr;
        }
    }

    const gpaEl = document.getElementById('gpa-value');
    if (totalCredits === 0) {
        gpaEl.innerText = "--";
    } else {
        let gpa = weightedSum / totalCredits;
        gpaEl.innerText = gpa.toFixed(2);
    }
}

/* UTILIDADES */
function saveData() {
    localStorage.setItem('medicinaGrades', JSON.stringify(grades));
    renderGrid();
    updateGPA();
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentSubject = null;
}

function resetProgress() {
    if (confirm("⚠️ ¿Estás seguro de borrar TODAS las notas?")) {
        grades = {};
        saveData();
    }
}

// Cerrar modal click afuera
window.onclick = function(e) {
    if (e.target == document.getElementById('modal')) closeModal();
}

// Enter para guardar
document.getElementById('grade-input').addEventListener("keypress", function(e) {
    if (e.key === "Enter") confirmGrade();
});

// Iniciar
init();

