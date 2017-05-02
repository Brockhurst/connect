import {Component, OnInit, ViewChild} from '@angular/core';


import './lesson-page.component.scss';

@Component({
    selector: 'ab-lesson-page',
    host: {class: 'ab-lesson-page'},
    templateUrl: 'lesson-page.component.html'
})
export class LessonPageComponent {

    @ViewChild('myvideo') myVideo: any;

    peer;
    anotherid;
    mypeerid;

    ngOnInit() {
        let video = this.myVideo.nativeElement;
        this.peer = new Peer({key: 'vs0v3agzz2jfw29'});

        setTimeout(() => {
            console.log(this.peer.id);
            this.mypeerid = this.peer.id;
        }, 3000);

        this.peer.on('connection', function (conn) {
            conn.on('data', function (data) {
                // Will print 'hi!'
                console.log(data);
            });
        });

        var n = <any>navigator;

        n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );

        this.peer.on('call', function (call) {

            n.getUserMedia({video: true, audio: true}, function (stream) {
                call.answer(stream);
                call.on('stream', function (remotestream) {
                    video.src = URL.createObjectURL(remotestream);
                    video.play();
                })
            }, function (err) {
                console.log('Failed to get stream', err);
            })
        })
    }

    connect() {
        var conn = this.peer.connect(this.anotherid);
        conn.on('open', function () {
            conn.send('Message from that id');
        });
    }

    videoconnect() {
        let video = this.myVideo.nativeElement;
        var localvar = this.peer;
        var fname = this.anotherid;

        //var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        var n = <any>navigator;

        n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );

        n.getUserMedia({video: true, audio: true}, function (stream) {
            var call = localvar.call(fname, stream);

            console.log(localvar);
            call.on('stream', function (remotestream) {
                video.src = URL.createObjectURL(remotestream);
                video.play();
            })
        }, function (err) {
            console.log('Failed to get stream', err);
        })


    }
}