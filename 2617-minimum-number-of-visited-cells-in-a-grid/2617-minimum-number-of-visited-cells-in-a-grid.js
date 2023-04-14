/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let vis = [];
    let next = [];
    for(let i = 0 ; i < m ; i ++){
        vis.push([]);
        for(let j = 0 ; j < n ; j ++){
            vis[i].push(0);
            let a = i*n+j;
            next[a] = [];
            next[a].push(a);
            next[a].push(a);
        }
    }
    function find_next(a, axis){
        if(a >= m*n) return m*n;
        if(next[a][axis] == a) return a;
        return next[a][axis] = find_next(next[a][axis],axis);
    }
    let qu = [];
    let qs = 0;
    qu.push(0);
    qu.push(0);
    qu.push(1);
    vis[0][0] = 1;
    while(qs < qu.length){
        let x = qu[qs++];
        let y = qu[qs++];
        let distance = qu[qs++];
        if(x == m-1 && y == n-1)
            return distance;
        let d = grid[x][y];
        for(let wx = x+1 ; wx <= x + d && wx < m ; wx++ ){
            let a = wx*n+y;
            let p = find_next(a,0);
            if(p == m*n) break;
            wx = Math.floor(p/n);
            if(wx > x + d || wx >= m ) break;
            if(vis[wx][y] == 1) continue;
            vis[wx][y] = 1;
            next[a][0] = (x+d+1)*n+y;
            qu.push(wx);
            qu.push(y);
            qu.push(distance+1);
        }
        for(let wy = y+1 ; wy <= y+d && wy < n ; wy ++){
            let a = x*n+wy;
            let p = find_next(a,1);
            if(p == m*n) break;
            wy = p%n;
            if(Math.floor(p/n) != x) break;
            if(wy > y + d || wy >= n ) break;
            if(vis[x][wy] == 1) continue;
            vis[x][wy] = 1;
            next[a][1] = x*n+y+d+1;
            qu.push(x);
            qu.push(wy);
            qu.push(distance+1);
        }
    }
    return -1;
};