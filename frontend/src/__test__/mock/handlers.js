import { rest } from 'msw'

export const handlers = [
    rest.post("/api/search/", (req, res, ctx) =>{
        const data = {
            filter: {
                locations: [],
                types: [],
                periodicity: []
            },
            "data": {
                    "total": 354234,
                    "size": 10,
                    "results": [
                        {
                            "id": "lWgKqVXW",
                            "objective": "Angular Developer",
                            "slug": "epam-angular-developer",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 419556,
                                    "name": "EPAM",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-17T20:30:00.000Z",
                            "created": "2021-08-18T12:55:16.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Angular 6+",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Javascript",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "TypeScript",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Scrum",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "HTML",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "CSS3",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Software development",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "1150136",
                                    "name": "Marina Subbotina",
                                    "username": "marina_subbotina",
                                    "professionalHeadline": "Business Analyst",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1156821",
                                    "name": "Valery Budkevich",
                                    "username": "valery_budkevich",
                                    "professionalHeadline": "Portfolio manager",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158141",
                                    "name": "Aleksandr Konnov",
                                    "username": "aleksandr_konnov",
                                    "professionalHeadline": "Technical Writer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 1,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "GdjB9xmd",
                            "objective": "Automation Tester (JavaScript)",
                            "slug": "epam-automation-tester-javascript",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 419556,
                                    "name": "EPAM",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-17T20:30:00.000Z",
                            "created": "2021-08-18T12:50:35.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Javascript",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "JIRA",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "BDD",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Scrum",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Automation testing",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "QA",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Software development",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "607732",
                                    "name": "Alexis Najarro",
                                    "username": "najarroa",
                                    "professionalHeadline": "Storyteller",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e4d1b612f5be7a7304ffdd834c35f77c6f1d76a5/profile_mZzTdqG.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1150136",
                                    "name": "Marina Subbotina",
                                    "username": "marina_subbotina",
                                    "professionalHeadline": "Business Analyst",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1156821",
                                    "name": "Valery Budkevich",
                                    "username": "valery_budkevich",
                                    "professionalHeadline": "Portfolio manager",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158141",
                                    "name": "Aleksandr Konnov",
                                    "username": "aleksandr_konnov",
                                    "professionalHeadline": "Technical Writer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 2,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "PW9PZV4r",
                            "objective": "Automation Tester (Java)",
                            "slug": "epam-automation-tester-java",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 419556,
                                    "name": "EPAM",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-17T20:30:00.000Z",
                            "created": "2021-08-18T12:45:43.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Automation testing",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Java",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Java 8",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "QA",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Software development",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Scrum",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "REST",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Kubernetes",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "SQL",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "1150136",
                                    "name": "Marina Subbotina",
                                    "username": "marina_subbotina",
                                    "professionalHeadline": "Business Analyst",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1156821",
                                    "name": "Valery Budkevich",
                                    "username": "valery_budkevich",
                                    "professionalHeadline": "Portfolio manager",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158141",
                                    "name": "Aleksandr Konnov",
                                    "username": "aleksandr_konnov",
                                    "professionalHeadline": "Technical Writer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 3,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "ed8QElbr",
                            "objective": "DevOps (Google cloud, CI/CD)",
                            "slug": "epam-devops-google-cloud-cicd",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 419556,
                                    "name": "EPAM",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-17T20:30:00.000Z",
                            "created": "2021-08-18T12:30:34.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Google Cloud",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "DevOps",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "CI/CD",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Kubernetes",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "CircleCI",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "1150136",
                                    "name": "Marina Subbotina",
                                    "username": "marina_subbotina",
                                    "professionalHeadline": "Business Analyst",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1156821",
                                    "name": "Valery Budkevich",
                                    "username": "valery_budkevich",
                                    "professionalHeadline": "Portfolio manager",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158141",
                                    "name": "Aleksandr Konnov",
                                    "username": "aleksandr_konnov",
                                    "professionalHeadline": "Technical Writer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 4,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "ZW2BX27W",
                            "objective": "Talent Solutions Operations freelancer 🚀for an ambitious startup with an experienced team🚀",
                            "slug": "torre-labs-talent-solutions-operations-freelancer-for-an-ambitious-startup-with-an-experienced-team-5",
                            "type": "freelance-gigs",
                            "organizations": [
                                {
                                    "id": 748404,
                                    "name": "Torre Labs",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1621443046/origin/bio/organizations/f7t0uvgrihgdrqh6ee9w.png"
                                }
                            ],
                            "locations": [],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-16T04:30:00.000Z",
                            "created": "2021-08-17T17:28:27.000Z",
                            "status": "open",
                            "compensation": {
                                "data": {
                                    "code": "range",
                                    "currency": "USD$",
                                    "minAmount": 2,
                                    "minHourlyUSD": 2,
                                    "maxAmount": 3,
                                    "maxHourlyUSD": 3,
                                    "periodicity": "hourly"
                                },
                                "visible": true
                            },
                            "skills": [
                                {
                                    "name": "Attention to detail",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Communication",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Customer service",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Strategic Thinking",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Recruiting",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "11836",
                                    "name": "Sebastian Gallo",
                                    "username": "sebasgallo",
                                    "professionalHeadline": "Making work fulfilling @ Torre",
                                    "picture": "https://storage.googleapis.com/image_test_torre/930148974157d738c24fd8a79b4d49bf.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 1321.1901
                                },
                                {
                                    "subjectId": "16180",
                                    "name": "Maria Fernanda Mosquera Noy",
                                    "username": "mafemosquera",
                                    "professionalHeadline": "Associate Growth Marketer at Torre",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/7a895a95f077665ddd23fabe738f7a8d71a2e013/profile_tU68tmh.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 1773.4566
                                },
                                {
                                    "subjectId": "22645",
                                    "name": "Melissa Erasso Rodríguez",
                                    "username": "melissa",
                                    "professionalHeadline": "Senior Recruiting Advisor",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/d93753b88a3235b94fb6d5bb64a95a483ef8eb57/profile_XXD4KSs.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 861.5257
                                },
                                {
                                    "subjectId": "23020",
                                    "name": "Daniela Botero",
                                    "username": "danielabotero",
                                    "professionalHeadline": "Senior Recruiting Advisor at Torre",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/56370799eb942ef7bc8bf973a900b29e9ab64364/profile_x9pzrJW.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 2059.3424
                                },
                                {
                                    "subjectId": "50406",
                                    "name": "Diana Montoya",
                                    "username": "diana_cujer",
                                    "professionalHeadline": "Applicants Acquisition Coordinator at Torre 🚀",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/329b49768e033b6550863462bfb9f3e5c2d12639/profile_mYTcFmi.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 1561.9904
                                },
                                {
                                    "subjectId": "257012",
                                    "name": "Nicole Sánchez",
                                    "username": "n_sanchez",
                                    "professionalHeadline": "Applicant Acquisition Coordinator at Torre",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/10f971557dca8078024fd483359d1f959018ca40/profile_nMbv83N.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 508.0649
                                },
                                {
                                    "subjectId": "485335",
                                    "name": "Mario Hernán Ramírez Kirckconnell",
                                    "username": "marioramirez",
                                    "professionalHeadline": "Platform Operations Coordinator",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/650684e67b263ac60d1af70886c0bc7f112a2c6d/profile_7nvlEhS.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 995.8092
                                },
                                {
                                    "subjectId": "1022877",
                                    "name": "Daniela Gaviria",
                                    "username": "danigaviriaz24",
                                    "professionalHeadline": "Inside Sales Manager",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/6e0374fdabe17b3c327acda2b65642d3f69c4268/profile_co5bV5l.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 1098.5637
                                },
                                {
                                    "subjectId": "1072337",
                                    "name": "Elizabeth Salome Reyes Monge",
                                    "username": "elizabethreyesmonge",
                                    "professionalHeadline": "Reclutamiento y Selección de Personal",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/9ff576915777525a47bdfbdc2e25daed595636fa/profile_j3TZyoR.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 850
                                },
                                {
                                    "subjectId": "1078818",
                                    "name": "Maria Alejandra Ballesteros VIllamizar",
                                    "username": "alejandraballesteros",
                                    "professionalHeadline": "Freelancer",
                                    "picture": null,
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1135562",
                                    "name": "Maria Alejandra Gómez",
                                    "username": "magomezp123",
                                    "professionalHeadline": "Recruiting Advisor",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/530109b4562f6ccb04cf91f85c9ac7fed749f364/profile_QrpabBM.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [
                                {
                                    "id": "0wx1Ovd2",
                                    "text": "Hello USD 2 for each hour?",
                                    "date": "2021-08-25T23:56:34.000Z"
                                },
                                {
                                    "id": "RrnmxjdA",
                                    "text": "Hola! Yo entiendo el idioma inglés; sin embargo, se me dificulta un poco el expresarme, PERO tengo todo el deseo de participar de esta experiencia. ¿Puedo aplicar? ",
                                    "date": "2021-08-28T03:02:54.000Z"
                                }
                            ],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 5,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "0wxX1P5w",
                            "objective": "Desarrollador Java / .Net Core",
                            "slug": "makers-solutions-desarrollador-java-net-core-3",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 755635,
                                    "name": "Makers Solutions",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600923720/origin/bio/organizations/Makers_okpnh5.png"
                                }
                            ],
                            "locations": [],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-19T04:30:00.000Z",
                            "created": "2021-08-14T14:08:32.000Z",
                            "status": "open",
                            "compensation": {
                                "data": {
                                    "code": "range",
                                    "currency": "USD$",
                                    "minAmount": 1000,
                                    "minHourlyUSD": 6.25,
                                    "maxAmount": 1500,
                                    "maxHourlyUSD": 9.375,
                                    "periodicity": "monthly"
                                },
                                "visible": true
                            },
                            "skills": [
                                {
                                    "name": "Java 8",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Spring",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "React",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Vue.js",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Angular",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "REST",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "SOAP",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "SQL",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": ".NET core",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "23020",
                                    "name": "Daniela Botero",
                                    "username": "danielabotero",
                                    "professionalHeadline": "Senior Recruiting Advisor at Torre",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/56370799eb942ef7bc8bf973a900b29e9ab64364/profile_x9pzrJW.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 2059.3424
                                },
                                {
                                    "subjectId": "83716",
                                    "name": "Arnold Julian Morales Zapata",
                                    "username": "a_julianmorales",
                                    "professionalHeadline": "Ingeniero Electrónico",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/440e27534dfebd94578a134ea33353e8a9997994/profile_KxZiRd7.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "107809",
                                    "name": "DANIEL LOAIZA ARANGO",
                                    "username": "daniel25",
                                    "professionalHeadline": "CEO - MAKERS",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ec7551dff10b04f9c59337114989f6f0cba20c95/profile_WWH0UvD.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "138920",
                                    "name": "Juan Felipe Bonilla García",
                                    "username": "juanfebog",
                                    "professionalHeadline": "Applicant Acquisition Coordinator Intern",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/7e11fd926d022078852b6e8fd6d6cfde4723f46d/profile_6ElqvGQ.JPG",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 850
                                },
                                {
                                    "subjectId": "542868",
                                    "name": "Jesus Emmanuel Abraham",
                                    "username": "emanuel_abraham",
                                    "professionalHeadline": "Tecnico Superior en Analisis de Sistemas",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/4dfc4427b1460b5b1d7717fa981151d1d270e385/profile_aRUcnCY.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1107631",
                                    "name": "Valentina Useche",
                                    "username": "valentinauseche",
                                    "professionalHeadline": "Talent Solutions Freelancer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/155ffbd5fd9c271b34cfcbf19f610d44dafae1b0/profile_T0zXg3g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1120087",
                                    "name": "Jaxon Julian Muñoz Avendaño",
                                    "username": "jaxon",
                                    "professionalHeadline": "Arquitecto de soluciones",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/2ef89a58649d0ea055ac2cd5db2b058b908ce9fd/profile_3sIQb5X.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1143632",
                                    "name": "Diego Andrés Botero Montoya",
                                    "username": "diegobotero54",
                                    "professionalHeadline": "Sr IT Talent Acquisition Specialist 🧑🏽‍🚀 @pragma // IT Recruiter",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/f5a7525da605e6d327fad79d25cfc3409dca5da1/profile_YBSCXYR.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158220",
                                    "name": "Natalia Chavarriaga Vásquez",
                                    "username": "nataliachavarriaga",
                                    "professionalHeadline": "Líder de Gestión Humana",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/1f62e5300e5b39ff168acb9e74b163bd3bf4cc82/profile_WE7lZ9o.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1164463",
                                    "name": "Maria Gaviria",
                                    "username": "mariagavirialo",
                                    "professionalHeadline": "Talent Solutions Coordinator Intern",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/4678c8ec46130a6a3910936e6db68a97cbc5ddc1/profile_S3fHtjU.jpg",
                                    "member": false,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 6,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "awyEn42w",
                            "objective": "Automation Tester (Python, SQL, Linux)",
                            "slug": "epam-automation-tester-python-sql-linux",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 419556,
                                    "name": "EPAM",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-15T20:30:00.000Z",
                            "created": "2021-08-05T06:46:56.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Python",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "SQL",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "CI",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Linux",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Jenkins",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Bash",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "GIT",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "TDD",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "OS",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Automated testing",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "1150136",
                                    "name": "Marina Subbotina",
                                    "username": "marina_subbotina",
                                    "professionalHeadline": "Business Analyst",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1156821",
                                    "name": "Valery Budkevich",
                                    "username": "valery_budkevich",
                                    "professionalHeadline": "Portfolio manager",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1158141",
                                    "name": "Aleksandr Konnov",
                                    "username": "aleksandr_konnov",
                                    "professionalHeadline": "Technical Writer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 7,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "2W1ZM42w",
                            "objective": "👨‍⚕️🩺💦 Médico general 👨‍⚕️🩺💦",
                            "slug": "mi-medico-ips-mdico-general-",
                            "type": "freelance-gigs",
                            "organizations": [
                                {
                                    "id": 879385,
                                    "name": "Mi Medico IPS",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1627028144/origin/bio/organizations/nuonabjfk4ogaon0akbe.png"
                                }
                            ],
                            "locations": [
                                "Colombia"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-01T04:30:00.000Z",
                            "created": "2021-07-22T01:29:40.000Z",
                            "status": "open",
                            "compensation": {
                                "data": {
                                    "code": "range",
                                    "currency": "COP$",
                                    "minAmount": 27000,
                                    "minHourlyUSD": 7.002546539850196,
                                    "maxAmount": 81000,
                                    "maxHourlyUSD": 21.007639619550588,
                                    "periodicity": "hourly"
                                },
                                "visible": true
                            },
                            "skills": [
                                {
                                    "name": "Medicina",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Salud",
                                    "experience": "1-plus-year",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Servicio al cliente",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                },
                                {
                                    "name": "Cuidado de la salud",
                                    "experience": "potential-to-develop",
                                    "proficiency": "potential-to-develop"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "570119",
                                    "name": "Ricardo Andres Rodriguez Peña",
                                    "username": "ricardor14",
                                    "professionalHeadline": "Creative Director, Marketing Strategist, Graphic Designer and Video Producer,",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/ef756d24ac58a374f9635667c4a89296976b9ed1/profile_YQlvqqj.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 1762.6605
                                },
                                {
                                    "subjectId": "570120",
                                    "name": "Edna Lucero Peña Maldonado",
                                    "username": "ednaluceropsicologa",
                                    "professionalHeadline": "ENTRENADORA DE PROCESOS DE DESARROLLO PERSONAL, BENESTAR EMPRESARIAL Y FELICIDAD ORGANIZACIONAL  - CONFERENCISTA –  ORIENTADORA FAMILIAR",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/5ee59fa9da674fda48291ab8d84699bb40f5200c/profile_hpoVn9w.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1142598",
                                    "name": "María Camila Riveros Rodríguez",
                                    "username": "macamilariveros",
                                    "professionalHeadline": "Lider Asistencial Médico",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 0
                                }
                            ],
                            "questions": [
                                {
                                    "id": "Nwqj3Qd3",
                                    "text": "Bendecido dia Giovanni., gracias por su interes. Por el momento Medicos Generales. mas adelante publicaremos otros perfiles requeridos. ",
                                    "date": "2021-07-23T13:58:33.000Z"
                                },
                                {
                                    "id": "OwGbl6W6",
                                    "text": "Estaré atenta a las recomendaciones, hice lo que pude al ingresar datos, gracias por la oportunidad. ",
                                    "date": "2021-07-24T20:23:42.000Z"
                                },
                                {
                                    "id": "kWR5lArN",
                                    "text": "Buen dia  Aida. Gracias por su interes y por desarrollar el genoma. Por favor envie su hoja de vida y soportes al correo mimedicoips@gmail.com. Estare atenta.",
                                    "date": "2021-07-25T13:59:07.000Z"
                                },
                                {
                                    "id": "ZW27RAw7",
                                    "text": "Buenas cordial saludo estoy interesada en laborar en Mi Medico IPS. Donde puedo enviar mi hoja de vida .llene los datos en genoma pero no logro completar la parte de las recomendaciones .me pueden orientar por favor .mil gracias ",
                                    "date": "2021-08-08T17:05:35.000Z"
                                }
                            ],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 8,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "NwqEvRQw",
                            "objective": "🗽 Javascript Software Engineer to work directly with USA clients 🗽 | 100% Remote 🏡",
                            "slug": "distillery-javascript-software-engineer-to-work-directly-with-usa-clients-100-remote-",
                            "type": "full-time-employment",
                            "organizations": [
                                {
                                    "id": 313983,
                                    "name": "Distillery",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1626202035/origin/bio/organizations/cqadhb5yqcmuwzdnjurd.png"
                                }
                            ],
                            "locations": [
                                "Argentina",
                                "Uruguay",
                                "Peru"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": null,
                            "created": "2021-07-14T13:22:17.000Z",
                            "status": "open",
                            "compensation": {
                                "data": null,
                                "visible": false
                            },
                            "skills": [
                                {
                                    "name": "Javascript",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "CSS",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "HTML",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "793434",
                                    "name": "Sebastián Álvarez",
                                    "username": "sebastianalvarezbarcelo",
                                    "professionalHeadline": "Recruiter",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/d7282db52fe7455b3ca7986e1e5534ca5a698008/profile_zzMXt2g.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 2954.1298
                                },
                                {
                                    "subjectId": "1141027",
                                    "name": "Jazmin Jabloñski",
                                    "username": "jazminjablonski",
                                    "professionalHeadline": "IT Recruiter",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/e0d935bf1b64a90ee91c81d5a2d90258c75627f6/profile_Vr5ueNn.jpg",
                                    "member": true,
                                    "manager": true,
                                    "poster": false,
                                    "weight": 346.5758
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 9,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        },
                        {
                            "id": "OwbYgRkW",
                            "objective": "Desarrollador front-end Vtex Freelancer",
                            "slug": "auteco-mobility-desarrollador-front-end-vtex-freelancer-10",
                            "type": "freelance-gigs",
                            "organizations": [
                                {
                                    "id": 743867,
                                    "name": "Auteco Mobility",
                                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1616602760/origin/bio/organizations/fbmpfhjebtqqgitkqry5.jpg"
                                }
                            ],
                            "locations": [
                                "Colombia",
                                "Ecuador",
                                "Brasil",
                                "Argentina",
                                "Nicaragua",
                                "Perú",
                                "México",
                                "Paraguay"
                            ],
                            "remote": true,
                            "external": false,
                            "deadline": "2021-09-01T00:00:00.000Z",
                            "created": "2021-07-02T16:30:41.000Z",
                            "status": "open",
                            "compensation": {
                                "data": {
                                    "code": "range",
                                    "currency": "COP$",
                                    "minAmount": 4000000,
                                    "minHourlyUSD": 6.483839388750182,
                                    "maxAmount": 6000000,
                                    "maxHourlyUSD": 9.725759083125272,
                                    "periodicity": "monthly"
                                },
                                "visible": true
                            },
                            "skills": [
                                {
                                    "name": "CSS",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "HTML5",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "Javascript",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "jQuery",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "CMS",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "HTML",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                },
                                {
                                    "name": "VTEX",
                                    "experience": "2-plus-years",
                                    "proficiency": "proficient"
                                }
                            ],
                            "members": [
                                {
                                    "subjectId": "801795",
                                    "name": "Manuela Pirateque",
                                    "username": "manupirateque",
                                    "professionalHeadline": "Musician, Music Producer, Graphic Designer",
                                    "picture": "https://starrgate.s3.amazonaws.com:443/users/9116c895d5fbb8aa5bd4a32a79378b554212d7a4/profile_sDtejfG.jpg",
                                    "member": true,
                                    "manager": false,
                                    "poster": false,
                                    "weight": 0
                                },
                                {
                                    "subjectId": "1062280",
                                    "name": "Diana Arenas",
                                    "username": "djarenas",
                                    "professionalHeadline": "Líder proyectos digitales",
                                    "picture": null,
                                    "member": true,
                                    "manager": true,
                                    "poster": true,
                                    "weight": 0
                                }
                            ],
                            "questions": [],
                            "context": {
                                "signaled": []
                            },
                            "_meta": {
                                "rank": {
                                    "position": 10,
                                    "value": 0.25,
                                    "boostedValue": 0.25
                                },
                                "scorer": {
                                    "@type": "and",
                                    "score": 1,
                                    "and": [
                                        {
                                            "@type": "concrete",
                                            "id": "completion",
                                            "input": {
                                                "criteria": null,
                                                "opportunity": {
                                                    "completion": 1
                                                }
                                            },
                                            "score": 1
                                        }
                                    ]
                                },
                                "filter": null,
                                "boosters": []
                            }
                        }
                    ],
                    "aggregators": {},
                    "offset": 0,
                    "pagination": {
                        "previous": null,
                        "next": "eyJjcmVhdGVkIjoiMjAyMS0wNy0wMlQxNjozMDo0MS4wMDBaIiwic3RhdHVzIjoib3BlbiIsInJhbmtWYWx1ZSI6MC4yNX0="
                    }
                }
        }; 
        const responseOk = res(
            ctx.status(200),
            ctx.json(data)
        )

        const responseError = res(
            ctx.status(200),
            ctx.json({"error":404})
        )

        const responseNoFound = res(
            ctx.status(404),
            ctx.json({"error":404})
        )

        const responseNoData = res(
            ctx.status(200),
            ctx.json({})
        )
        return responseOk;
    }),
    rest.get("/api/users/:username",  (req, res, ctx) =>{
        return res(
            ctx.status(200)
        )
    })
]