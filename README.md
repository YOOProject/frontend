# React + Vite


YOO/
│── backend/                  # Node.js backend
│   ├── config/               # Config files (DB, Auth, etc.)
│   ├── controllers/          # Business logic
│   ├── models/               # Database schemas
│   ├── routes/               # API routes
│   ├── services/             # External service integrations (payments, caching, etc.)
│   ├── utils/                # Helper functions
│   ├── app.js                # Express app entry
│   ├── server.js             # Server startup
│
│── frontend/                 # React.js frontend
│   ├── public/               # Static assets
│   ├── src/                  
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page-level components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── contexts/         # Context API for global state
│   │   ├── services/         # API calls
│   │   ├── App.js            # Main App component
│   │   ├── index.js          # React entry point
│
│── database/                 # Database scripts
│   ├── migrations/           # DB migrations
│   ├── seeders/              # Initial data seeding
│
│── infra/                    # Infrastructure & deployment
│   ├── docker/               # Docker configuration
│   ├── k8s/                  # Kubernetes manifests
│   ├── terraform/            # Terraform for cloud resources
│
│── docs/                     # Documentation
│── tests/                    # Testing setup
│── package.json              # Dependencies
│── README.md                 # Project overview
# frontend
``` bash
  git push command
  git  pull
  git fetch
  git checkout -b newbranch --> create new branch
