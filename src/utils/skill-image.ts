import html from 'assets/svg/html.svg';
import css from 'assets/svg/css.svg';
import javascript from 'assets/svg/javascript.svg';
import typescript from 'assets/svg/typescript.svg';
import python from 'assets/svg/python.svg';
import react from 'assets/svg/react.svg';
import nodeJS from 'assets/svg/nodeJS.svg';
import nextJS from 'assets/svg/nextJS.svg';
import nestJS from 'assets/svg/NestJS.svg';
import tailwind from 'assets/svg/tailwind.svg';
import pytorch from 'assets/svg/pytorch.svg';
import pandas from 'assets/svg/pandas.svg';
import opencv from 'assets/svg/opencv.svg';
import mongoDB from 'assets/svg/mongoDB.svg';
import postgresql from 'assets/svg/postgresql.svg';
import docker from 'assets/svg/docker.svg';
import git from 'assets/svg/git.svg';
import postman from 'assets/svg/postman.svg'
import sklearn from 'assets/svg/sklearn.svg'

const skillMap: Record<string, string> = {
    html,
    css,
    javascript,
    typescript,
    python,
    react,
    'node js': nodeJS,
    'next js': nextJS,
    'nest js': nestJS,
    tailwind,
    pytorch,
    pandas,
    sklearn,
    opencv,
    mongodb: mongoDB,
    postgresql,
    docker,
    git,
    postman,
    sklearn
};

export const skillsImage = (skill: string): string | null => {
    const skillID = skill.toLowerCase();
    return skillMap[skillID] || null;
};
