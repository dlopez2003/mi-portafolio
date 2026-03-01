import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  linkGithub?: string;
}

interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  detalles: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nombre = 'DORIAN EDILSON LOPEZ ESPEJO';
  profesion = 'Ingeniero de Sistemas en Formación | Desarrollador Web & .NET';
  vistaActual = 'inicio';

  perfil = 'Estudiante de último año de Ingeniería de Sistemas y actual pasante en TI. Especializado en el diseño y desarrollo de aplicaciones web robustas, arquitecturas de software y gestión de bases de datos. Apasionado por resolver problemas complejos mediante código limpio y tecnologías modernas, adaptándome a múltiples entornos de desarrollo.';

  habilidades = [
    'Angular',
    'React',
    'C# / .NET',
    'Node.js',
    'Python',
    'SQL Server',
    'MySQL Workbench',
    'TypeScript',
    'WebSockets',
    'Git'
  ];

  experiencia: Experiencia[] = [
    {
      cargo: 'Pasante en TI',
      empresa: 'Universidad Adventista de Bolivia (UAB)',
      periodo: '2025 - Presente',
      detalles: [
        'Desarrollo y mantenimiento de plataformas institucionales web.',
        'Colaboración en la arquitectura y gestión de bases de datos relacionales.',
        'Implementación de soluciones automatizadas para optimizar procesos administrativos.',
        'Soporte técnico y despliegue de aplicaciones.'
      ]
    }
  ];

  proyectos: Proyecto[] = [
    {
      titulo: 'Sistema de Control de Accesos - Internado UAB',
      descripcion: 'Plataforma web desarrollada para monitorear y registrar de forma segura el flujo de entrada y salida de los estudiantes internos de la universidad. Implementa validaciones de horarios y control de permisos administrativos.',
      tecnologias: ['React', 'Node.js', 'MySQL', 'SQL Workbench'],
      linkGithub: 'https://github.com/piano7check/g5-permisos-internos.git'
    },
    {
      titulo: 'Chat Web Institucional UAB',
      descripcion: 'Aplicación de mensajería en tiempo real diseñada para facilitar la comunicación directa entre los estudiantes y los encargados de las distintas áreas de la universidad, centralizando las consultas institucionales.',
      tecnologias: ['Python', 'WebSockets', 'SQL Server', 'HTML/CSS'],
      linkGithub: 'https://github.com/dlopez2003/compiladores.git'
    },
    {
      titulo: 'Sistema de Gestión Multisucursal (En Desarrollo)',
      descripcion: 'Arquitectura base para un ERP diseñado para manejar múltiples sucursales simultáneas. El enfoque principal está en la lógica de base de datos escalable para soportar inventarios distribuidos, control de roles granulares y sincronización de datos.',
      tecnologias: ['Arquitectura de Software', 'Node.Js', 'SQL Server', 'React'],
      linkGithub: 'https://github.com/efren2004/Sistema-de-Inventario-Multi-Sucursal-para-Mini-Tiendas.git'
    }
  ];

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}
