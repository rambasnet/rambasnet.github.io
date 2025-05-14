FROM python:3.13-slim

RUN apt update \
    && apt install -y \
    time curl git dos2unix \
    sudo less wget \
    && apt clean;

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@latest
ARG USER=user
ARG UID=1000
ARG GID=1000

# Set environment variables
ENV USER=${USER}
ENV HOME=/home/${USER}

# Create user and setup permissions on /etc/sudoers
RUN useradd -m -s /bin/bash -N -u $UID $USER && \
    echo "${USER} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers && \
    chmod 0440 /etc/sudoers && \
    chmod g+w /etc/passwd 

WORKDIR ${HOME}

RUN pip install --upgrade pip

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY package.json ./
RUN npm install

# Install zsh - use "Bira" theme with some customization. 
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t bira \
    -p git \
    -p ssh-agent \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions

# Application port
EXPOSE 3000

USER user

ENV PATH=$HOME:$PATH
CMD ["zsh"]
