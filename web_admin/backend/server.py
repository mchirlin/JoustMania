from flask import Flask, send_file, send_from_directory
from multiprocessing import Queue, Manager, Process
import json

class Server:
    def __init__(self, command_queue=Queue(), ns=None):
        self.app = Flask(__name__)
        self.app.secret_key="MAGFest is a donut"
        self.command_queue = command_queue

        if ns == None:
            self.ns = Manager().Namespace()
            self.ns.status = dict()
            self.ns.settings = {
                'sensitivity':1,
                'red_on_kill':False,
                'random_team_size':3,
                'force_all_start':False,
                'color_lock_choices':{
                    2: ['Magenta','Green'],
                    3: ['Orange','Turquoise','Purple'],
                    4: ['Yellow','Green','Blue','Purple']
            }}
            self.ns.battery_status = dict()
        else:
            self.ns = ns

    # def start(self):
    #   self.configure_routes()
    #   # Your server logic goes here
    #   while True:
    #       # Example: Read from queue and update namespace
    #       data_from_queue = self.queue.get()
    #       self.namespace.data = data_from_queue

    def configure_routes(self):
      @self.app.route('/')
      def react():
          return send_file('../frontend/dist/index.html')

      @self.route('/assets/<path:path>')
      def serve_static(path):
          return send_from_directory('../frontend/dist/assets', path)

      # Route for seeing a data
      @self.app.route('/status')
      def status():
          return json.dumps(self.ns.status)

    def web_loop(self):
        self.app.run(host='0.0.0.0', port=80, debug=False)

    def web_loop_with_debug(self):
        self.app.run(host='0.0.0.0', port=80, debug=True)

def start_web(command_queue, ns):
    server = Server(command_queue,ns)
    server.configure_routes()
    server.web_loop()

if __name__ == '__main__':
    server = Server()
    server.web_loop_with_debug()