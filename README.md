Turbo Slack Commands
=================

EC2
-----

Open .bashrc and add:

	export PS1='\[\e[0;32m\]\u\[\e[m\] \[\e[1;34m\]\W\[\e[m\] \[\e[1;32m\]\$\[\e[m\] '

Run:

	sudo yum update -y

If there are any issues running yum update:

	sudo yum-complete-transaction

Continue:

	sudo yum clean all
	sudo yum update -y
	sudo yum groupinstall -y  'Development Tools'

	sudo yum install upstart
	sudo yum install git

	git clone https://github.com/joyent/node.git
	cd node/
	git tag -l
	git checkout v[latest]
	./configure && make && sudo make install
	cd ../
	sudo rm -r node

Generate SSH key: https://help.github.com/articles/generating-ssh-keys/#platform-linux

	git config --global user.name "Turbo Server"
	git config --global user.email turbo@turbostudios.com
	git config --global color.ui true

	cd ~
	git clone git@github.com:TurboStudios/turbo-slack-commands.git
	cd turbo-slack-commands/
	git fetch
	git checkout develop

	npm install express
	npm install --save body-parser
	sudo $(which npm) install forever -g

	chmod +x ./start
	chmod +x ./stop

Start the node server:

	./start