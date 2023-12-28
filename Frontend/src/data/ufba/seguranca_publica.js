import { GradeState } from "../../components/materia";
export const seguranca_publica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ADMH24",
          nome: "ESTADO E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DIRB83",
          nome: "ESTADO E DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCJ87",
          nome: "EDUCAÇÃO ABERTA CONTINUADA E A DISTÂNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "HACE28",
          nome: "OFICINA DE TEXTOS EM HUMANIDADES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "HACE29",
          nome: "SEMINÁRIO DE PESQUISA",
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
          codigo: "DIRC14",
          nome: "CRIMINOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DIRC15",
          nome: "DIREITOS FUNDAMENTAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHL23",
          nome: "CONTROLE SOCIAL E SEGURANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHL24",
          nome: "SOCIOLOGIA DO CRIME",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHL48",
          nome: "VIOLÊNCIA E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ADMH57",
          nome: "GESTÃO DE SEGURANÇA PÚBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMH58",
          nome: "POLÍTICAS PÚBLICAS E GESTÃO GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADMH59",
          nome: "SISTEMAS DE INFORMAÇÕES GER PARA TOMADA DE DECISÕES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMH60",
          nome: "GESTÃO DE RISCOS E CATÁSTROFE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "COMB50",
          nome: "COMUNICAÇÃO E PODER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHL26",
          nome: "ESTUDOS PRISIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATF09",
          nome: "ESTATÍSTICA PARA AS CIÊNCIAS SOCIAIS APLICADAS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ADMH61",
          nome: "TCC - TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ADMH62",
          nome: "ÉTICA NAS ORGANIZAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
