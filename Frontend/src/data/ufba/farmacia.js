import { GradeState } from "../../components/materia";
export const farmacia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIOA79",
          nome: "GENÉTICA PARA A AREA DE SAUDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "BIOA80",
          nome: "BOTÂNICA APLICADA À FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "BIOA81",
          nome: "BIOLOGIA APLICADA A FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FARA44",
          nome: "INTRODUÇÃO AO ESTUDO DAS CIÊNCIAS FARMACÊUTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISCA81",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT047",
          nome: "COMPLEMENTOS DE MATEMATICA I A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "QUIB13",
          nome: "FUNDAMENTOS DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "FARA66",
          nome: "BIOSSEGURANÇA EM LABORATÓRIOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FARA70",
          nome: "INTRODUÇÃO À ATENÇÃO FARMACÊUTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS070",
          nome: "BIOQUÍMICA FUNDAMENTAL PARA FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA43",
          nome: "ANATOMIA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSA44",
          nome: "HISTOLOGIA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATA44",
          nome: "ESTATISTICA V",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "QUI138",
          nome: "QUIMICA ORGANICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "7",
          codigo: "QUIB14",
          nome: "QUÍMICA INORGÂNICA E OS SISTEMAS BIOLÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FAR100",
          nome: "FARMACOGNOSIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FARA01",
          nome: "METODOLOGIA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHF12",
          nome: "ANTROPOLOGIA DA SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS071",
          nome: "BIOQUÍMICA METABÓLICA PARA FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ICSA45",
          nome: "FISIOLOGIA HUMANA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "QUI139",
          nome: "QUIMICA ORGANICA FUNDAMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "2" }],
        },
        {
          id: "6",
          codigo: "QUIB35",
          nome: "QUIMICA ANALITICA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "7", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FAR101",
          nome: "FARMACOGNOSIA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "6", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ICS019",
          nome: "PROCESSOS GERAIS DE PATOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "4", numero: "2" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ICSA46",
          nome: "IMUNOLOGIA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA47",
          nome: "MICROBIOLOGIA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSA48",
          nome: "PARASITOLOGIA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "QUIB36",
          nome: "QUIMICA ANALÍTICA II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "3" }],
        },
        {
          id: "6",
          codigo: "QUIB37",
          nome: "QUÍMICA ORGÂNICA BÁSICA EXPERIMENTAL I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "FAR176",
          nome: "BROMATOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FARA71",
          nome: "IMUNOLOGIA APLICADA A FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "FARA72",
          nome: "PARASITOLOGIA APLICADA À FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FARA73",
          nome: "ESTÁGIO MODULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICS036",
          nome: "FARMACODINÂMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ISCA82",
          nome: "EPIDEMIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "QUI012",
          nome: "FUNDAMENTOS DE FÍSICO-QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FAR110",
          nome: "BIOQUÍMICA CLÍNICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "FAR141",
          nome: "QUIMICA FARMACEUTICA III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "6", numero: "5" },
            { id: "6", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "FAR145",
          nome: "FARMACOTECNICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "3",
          codigo: "FARA34",
          nome: "TOXICOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "4",
          codigo: "FARA74",
          nome: "MICROBIOLOGIA APLICADA A FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "5",
          codigo: "FARA75",
          nome: "ESTÁGIO MODULAR II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "FAR113",
          nome: "CITOLOGIA CLÍNICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "FAR147",
          nome: "MÉTODOS FÍSICOS DE ANÁLISES APLICADAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "2",
          codigo: "FAR181",
          nome: "FARMACOLOGIA INTEGRADA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "FARA76",
          nome: "ESTÁGIO MODULAR III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FARA79",
          nome: "FARMACOCINÉTICA CLÍNICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "5",
          codigo: "FARA80",
          nome: "HEMATOLOGIA APLICADA À FARMÁCIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "6",
          codigo: "FARA81",
          nome: "BIOQUÍMICA E ANÁLISE DE ALIMENTOS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "7",
          codigo: "ISCA83",
          nome: "POLÍTICA DE SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "FARA77",
          nome: "ESTÁGIO MODULAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FARA82",
          nome: "GESTÃO E PLANEJAMENTO DE SERVIÇOS DE SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "7", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "FARA83",
          nome: "CONTROLE DE QUALIDADE FISICOQUÍMICO DE: ALIMENTOS COSMÉTICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "3",
          codigo: "FARA84",
          nome: "CONTROLE MICROBIOLÓGICO DE PRODUTOS FARMACÊUTICOS CORRELATO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FARA85",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO-I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FARA89",
          nome: "FARMÁCIA CLÍNICA E ATENÇÃO FARMACÊUTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "FAR107",
          nome: "DEONTOLOGIA E LEGISLAÇÃO FARMACÊUTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FARA78",
          nome: "ESTÁGIO MODULAR V",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FARA86",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO-II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "8" }],
        },
        {
          id: "3",
          codigo: "FARA88",
          nome: "ADMINISTRAÇÃO DE EMPRESAS FARMACÊUTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FARA90",
          nome: "DIAGNÓSTICO LABORATORIAL E SAÚDE PÚBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "5" },
            { id: "4", numero: "6" },
            { id: "5", numero: "7" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "FARA87",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO-III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "9" }],
        },
        {
          id: "1",
          codigo: "FARA91",
          nome: "ESTAGIO FINAL DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
